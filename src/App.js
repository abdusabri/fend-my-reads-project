import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Shelves from './models/Shelves'
import MyReads from './components/MyReads'
import BookSearch from './components/BookSearch'
import BookModel from './models/BookModel'

class BooksApp extends React.Component {
  state = {
    shelves: Shelves.shelves,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((res) => {
          this.setState({books: res.map(BookModel.mapToBookModel)})
      })
      .catch((err) => console.log(err))
  }

  handleMoveBookToShelf = (bookId, shelf) => {
    const booksCopy = [...this.state.books]
    const bookIndex = booksCopy.findIndex((b) => b.id === bookId)
    BooksAPI.get(bookId)
      .then((book) => BooksAPI.update(book, shelf)
        .then(() => {
          booksCopy[bookIndex].shelf = shelf
          this.setState({booksCopy})
        }))
      .catch((err) => {
        console.log(err)
        // TODO: Improve handling of errors, considerations:
        // 1) Error message to user
        // 2) Cleaner solution for resetting the book shelf so that 
        // the drop down in MoveToShelf comp. selects the correct 
        // shelf (original)
        const currentShelf = this.state.books[bookIndex].shelf
        booksCopy[bookIndex].shelf = ''
        this.setState({ books: booksCopy })
        booksCopy[bookIndex].shelf = currentShelf
        this.setState({ books: booksCopy })
      })
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <MyReads 
                shelves={this.state.shelves}
                books={this.state.books}
                onMoveBookToShelf={this.handleMoveBookToShelf}/>
            )} />
            <Route path='/search' render={() => (
                <BookSearch 
                  savedBooks={this.state.books}/>
            )} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
