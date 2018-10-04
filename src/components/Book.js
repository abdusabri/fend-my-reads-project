import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoveToShelf from './MoveToShelf'

class Book extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        coverImageUrl: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        onMoveBookToShelf: PropTypes.func.isRequired
    }

    handleMoveBookToShelf = (shelf) =>{
        console.log(`BookComp. - BookId: "${this.props.id}" needs to be moved to "${shelf}" Shelf`)
        this.props.onMoveBookToShelf(this.props.id, shelf)
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