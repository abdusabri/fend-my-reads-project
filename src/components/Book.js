import React from 'react'
import PropTypes from 'prop-types'
import MoveToShelf from './MoveToShelf'

const Book = (props) => {
    
    const handleMoveBookToShelf = (shelf) =>{
        props.onMoveBookToShelf(props.id, shelf)
    }

    
    return (
        <li>
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover'>
                        <img src={props.coverImageUrl}
                            alt={props.title}/>
                    </div>
                    <MoveToShelf
                        bookShelf={props.shelf}
                        onMoveBookToShelf={handleMoveBookToShelf}/>
                </div>
                <div className='book-title'>{props.title}</div>
                <div className='book-authors'>{props.authors.join(" & ")}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onMoveBookToShelf: PropTypes.func.isRequired
}

export default Book