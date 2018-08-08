import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './BookShelf';

class BookShelfPage extends Component {

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf onNewShelfSelected={this.props.onNewShelfSelected} title="Currently Reading" books={this.props.books.filter(book => book.shelf == 'currentlyReading')} />
                <Bookshelf onNewShelfSelected={this.props.onNewShelfSelected} title="Want to Read" books={this.props.books.filter(book => book.shelf == 'wantToRead')} />
                <Bookshelf onNewShelfSelected={this.props.onNewShelfSelected} title="Read" books={this.props.books.filter(book => book.shelf == 'read')} />
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