import React from 'react'
// import * as BooksAPI from './BooksAPI'
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
    //TODO: Remove mock
    const books = [
      {
        id: 1,
        title: "Ender's Game",
        coverImageUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
        authors: [
          'Orson',
          'Scott',
          'Card'
        ],
        shelf: 'currentlyReading'
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        coverImageUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
        authors: [
          'Harper',
          'Lee'
        ],
        shelf: 'read'
      }
    ]
    this.setState({ books : books})
  }

  handleMoveBookToShelf = (bookId, shelf) =>{
    console.log(`AppComp. - BookId: "${bookId}" needs to be moved to "${shelf}" Shelf`)
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
