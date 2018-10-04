import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onMoveBookToShelf: PropTypes.func.isRequired
    }

    handleMoveBookToShelf = (bookId, shelf) =>{
        this.props.onMoveBookToShelf(bookId, shelf)
    }

    render () {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.title}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {this.props.books.map((book) => (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                coverImageUrl={book.coverImageUrl}
                                authors={book.authors}
                                shelf={book.shelf}
                                onMoveBookToShelf={this.handleMoveBookToShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf