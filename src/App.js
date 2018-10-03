import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './models/Shelves'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: Shelves.shelves
  }

  render() {
    return (
      <div className='app'>
        {this.state.showSearchPage ? (
          <div className='search-books'>
            <BookSearch/>
            <div className='search-books-results'>
              <ol className='books-grid'></ol>
            </div>
          </div>
        ) : (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <div>
              {this.state.shelves.map((shelf) => (
                <BookShelf 
                  key={shelf.id}
                  title={shelf.title}/>
              ))}
              </div>
            </div>
            <div className='open-search'>
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
