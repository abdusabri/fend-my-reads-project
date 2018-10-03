import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoveToShelf from './MoveToShelf'

class Book extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        coverImageUrl: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
    }

    render () {
        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover'>
                            <img src={this.props.coverImageUrl}/>
                        </div>
                        <MoveToShelf/>
                    </div>
                    <div className='book-title'>{this.props.title}</div>
                    <div className='book-authors'>{this.props.authors}</div>
                </div>
            </li>
        );
    }
}

export default Book