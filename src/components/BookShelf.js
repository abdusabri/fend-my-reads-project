import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render () {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.title}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf