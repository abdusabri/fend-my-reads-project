import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MyReads extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onMoveBookToShelf: PropTypes.func.isRequired
    }

    handleMoveBookToShelf = (bookId, shelf) =>{
        this.props.onMoveBookToShelf(bookId, shelf)
    }

    render () {
        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <div>
                        {this.props.shelves.map((shelf) => (
                            <BookShelf
                                key={shelf.id}
                                title={shelf.title}
                                books={this.props.books.filter((book) => book.shelf === shelf.value)}
                                onMoveBookToShelf={this.handleMoveBookToShelf}/>
                        ))}
                    </div>
                </div>
                <div className='open-search'>
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>             
        )
    }    
}

export default MyReads

