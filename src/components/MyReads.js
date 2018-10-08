import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const MyReads = (props) => {

    const handleMoveBookToShelf = (bookId, shelf) =>{
        props.onMoveBookToShelf(bookId, shelf)
    }

    return (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
                <div>
                    {props.shelves.map((shelf) => (
                        <BookShelf
                            key={shelf.id}
                            title={shelf.title}
                            books={props.books.filter((book) => book.shelf === shelf.value)}
                            onMoveBookToShelf={handleMoveBookToShelf}/>
                    ))}
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'>Add a book</Link>
            </div>
        </div>             
    )   
}

MyReads.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBookToShelf: PropTypes.func.isRequired
}

export default MyReads

