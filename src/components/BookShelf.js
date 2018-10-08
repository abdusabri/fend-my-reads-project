import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = (props) => {
    
    const handleMoveBookToShelf = (bookId, shelf) =>{
        props.onMoveBookToShelf(bookId, shelf)
    }

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{props.title}</h2>
            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {props.books.map((book) => (
                        <Book
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            coverImageUrl={book.coverImageUrl}
                            authors={book.authors}
                            shelf={book.shelf}
                            onMoveBookToShelf={handleMoveBookToShelf}/>
                    ))}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBookToShelf: PropTypes.func.isRequired
}


export default BookShelf