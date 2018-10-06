import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import BookModel from '../models/BookModel'
import PropTypes from 'prop-types'

class BookSearch extends Component {
    static propTypes = {
        savedBooks: PropTypes.array.isRequired
    }

    state = {
        searchText: '',
        books: []
    }

    handleTextChange = (e) => {
        this.setState({ searchText: e.target.value })
        BooksAPI.search(e.target.value)
            .then((res) => {
                if (!res || res['error']) {
                    this.setState({ books: [] })
                    return
                }
                const books = res.map(BookModel.mapToBookModel)
                this.setBookShelves(books)
                this.setState({ books })
            })
            .catch((e) => console.log(e))
    }

    setBookShelves = (books) => {
        this.props.savedBooks.forEach((savedBook) => {
            const matchedBook = books.find((b) => b.id === savedBook.id)
            if (matchedBook) {
                matchedBook.shelf = savedBook.shelf
            }
        })
    }

    handleMoveBookToShelf = (bookId, shelf) => {
        const booksCopy = [...this.state.books]
        const bookIndex = booksCopy.findIndex((b) => b.id === bookId)
        BooksAPI.get(bookId)
            .then((book) => BooksAPI.update(book, shelf)
                .then(() => {
                    booksCopy[bookIndex].shelf = shelf
                    this.setState({ booksCopy })
                }))
            .catch((err) => {
                console.log(err)
                // TODO: Improve handling of errors, considerations:
                // 1) Error message to user
                // 2) Cleaner solution for resetting the book shelf so that 
                // the drop down in MoveToShelf comp. selects the correct 
                // shelf (original)
                const currentShelf = this.state.books[bookIndex].shelf
                booksCopy[bookIndex].shelf = ''
                this.setState({ booksCopy })
                booksCopy[bookIndex].shelf = currentShelf
                this.setState({ booksCopy })
            })
    }

    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                        <input type='text' placeholder='Search by title or author'
                            onChange={this.handleTextChange}
                            value={this.state.searchText} />
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {this.state.books.map((book) => (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                coverImageUrl={book.coverImageUrl}
                                authors={(book.authors) ? book.authors : []}
                                shelf={(book.shelf) ? book.shelf : 'none'}
                                onMoveBookToShelf={this.handleMoveBookToShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch