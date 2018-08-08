import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BookShelfPage from './components/BookShelfPage';
import SearchPage from './components/SearchPage';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll()
  .then(booksFromApi => {
    this.setState({ books: booksFromApi });
});
}

updateShelf(book, shelf) {
  BooksAPI.update(book, shelf)
  .then(data => {
      this.getAllBooks();
  })
}
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component = {() => <BookShelfPage books={this.state.books} onNewShelfSelected={(book, shelf) => this.updateShelf(book, shelf)} />} />
          <Route path="/search" component={() => <SearchPage books={this.state.books} onNewShelfSelected={(book, shelf) => this.updateShelf(book, shelf)}/>} />
        </div>
       </BrowserRouter> 
    );
  }
}

export default App
