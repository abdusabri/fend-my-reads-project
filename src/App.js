import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import Shelves from './models/Shelves'
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'

class BooksApp extends React.Component {
  state = {
    shelves: Shelves.shelves,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((res) => {
          const books = res.map((book) => ({
            id: book.id,
            title: book.title,
            coverImageUrl: book.imageLinks.smallThumbnail,
            authors: book.authors,
            shelf: book.shelf
          }))
          this.setState({books})
      })
      .catch((err) => console.log(err))
  }

  handleMoveBookToShelf = (bookId, shelf) =>{
    const booksCopy = [...this.state.books]
    booksCopy.find((b) => b.id === bookId).shelf = shelf
    this.setState({books: booksCopy})
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <div className='list-books'>
                <div className='list-books-title'>
                  <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                  <div>
                    {this.state.shelves.map((shelf) => (
                      <BookShelf
                        key={shelf.id}
                        title={shelf.title}
                        books={this.state.books.filter((book) => book.shelf === shelf.value)}
                        onMoveBookToShelf={this.handleMoveBookToShelf}/>
                    ))}
                  </div>
                </div>
                <div className='open-search'>
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
            )} />
            <Route path='/search' render={() => (
                <BookSearch />
            )} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
