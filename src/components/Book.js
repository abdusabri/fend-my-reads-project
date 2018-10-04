import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoveToShelf from './MoveToShelf'

class Book extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        coverImageUrl: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired
    }

    handleMoveBookToShelf = (shelf) =>{
        console.log(`Book: "${this.props.title}" has been moved to "${shelf}" Shelf`);
    }

    render () {
        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover'>
                            <img src={this.props.coverImageUrl}
                                alt={this.props.title}/>
                        </div>
                        <MoveToShelf
                            bookShelf={this.props.shelf}
                            onMoveBookToShelf={this.handleMoveBookToShelf}/>
                    </div>
                    <div className='book-title'>{this.props.title}</div>
                    <div className='book-authors'>{this.props.authors.join(" ")}</div>
                </div>
            </li>
        );
    }
}

export default Book