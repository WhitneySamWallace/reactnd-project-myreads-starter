import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './book_shelf';

class BookShelfPage extends Component {
    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf />
                <Bookshelf />
                <Bookshelf />
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