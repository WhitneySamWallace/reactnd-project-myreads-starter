import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './book_shelf';
import * as BooksAPI from '../BooksAPI';

class BookShelfPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };

        BooksAPI.getAll()
        .then(booksFromApi => {
            this.setState({ books: booksFromApi })
        });
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" books={this.state.books.filter(book => book.shelf == 'currentlyReading')} />
                <Bookshelf title="Want to Read" books={this.state.books.filter(book => book.shelf == 'wantToRead')} />
                <Bookshelf title="Read" books={this.state.books.filter(book => book.shelf == 'read')} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search for a book</Link>
            </div>
        </div>
        );
    }
}

export default BookShelfPage;