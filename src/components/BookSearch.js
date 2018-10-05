import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {
    state = {
        searchText: '',
        books: []
    }

    handleTextChange = (e) => {
        this.setState({searchText: e.target.value})
        BooksAPI.search(e.target.value)
            .then((res) => {
                if(!res || res['error']) {
                    this.setState({books: []})
                    return
                }
                const books = res.map((book) => ({
                    id: book.id,
                    title: book.title,
                    coverImageUrl: book.imageLinks.smallThumbnail,
                    authors: book.authors,
                    shelf: book.shelf
                }))
                this.setState({books})
            })
            .catch((e) => console.log(e))
    }

    handleMoveBookToShelf = (bookId, shelf) => {
        console.log('Search Comp. wants to move a book to a shelf');
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
                            value={this.state.searchText}/>
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
                                authors={(book.authors)? book.authors : []}
                                shelf={(book.shelf)? book.shelf : 'none'}
                                onMoveBookToShelf={this.handleMoveBookToShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch