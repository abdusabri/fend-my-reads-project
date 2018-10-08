import React from 'react'
import PropTypes from 'prop-types'
import Shelves from '../models/Shelves'

const MoveToShelf = (props) => {
    
    const handleChangeEvent = (e) => {
        props.onMoveBookToShelf(e.target.value)
    }

    return (
        <div className='book-shelf-changer'>
            <select defaultValue={props.bookShelf}
                onChange={handleChangeEvent}>
                    <option value='move' disabled>Move to...</option>
                    {Shelves.shelves.map((shelf) => (
                        <option key={shelf.id} value={shelf.value}>
                            {shelf.title}</option>
                    ))}
                    <option value='none'>None</option>
            </select>
        </div>
    )
}

MoveToShelf.propTypes = {
    bookShelf: PropTypes.string.isRequired,
    onMoveBookToShelf: PropTypes.func.isRequired
}

export default MoveToShelf