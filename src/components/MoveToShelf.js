import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelves from '../models/Shelves'

class MoveToShelf extends Component {
    static propTypes = {
        bookShelf: PropTypes.string.isRequired,
        onMoveBookToShelf: PropTypes.func.isRequired
    }

    handleChangeEvent = (e) => {
        this.props.onMoveBookToShelf(e.target.value)
    }

    render () {
        return (
            <div className='book-shelf-changer'>
                <select defaultValue={this.props.bookShelf}
                    onChange={this.handleChangeEvent}>
                        <option value='move' disabled>Move to...</option>
                        {Shelves.shelves.map((shelf) => (
                            <option key={shelf.id} value={shelf.value}>
                                {shelf.title}</option>
                        ))}
                        <option value='none'>None</option>
                </select>
            </div>
        );
    }
}

export default MoveToShelf