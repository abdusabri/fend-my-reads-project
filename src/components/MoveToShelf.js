import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelves from '../models/Shelves'

class MoveToShelf extends Component {
    render () {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    {Shelves.shelves.map((shelf) => (
                        <option key={shelf.id} value={shelf.value}>
                            {shelf.title}</option>
                    ))}
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default MoveToShelf