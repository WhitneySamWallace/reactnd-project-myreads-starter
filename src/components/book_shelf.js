import React, { Component } from 'react';
import BookList from './book_list';

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">PLACEHOLDER</h2>
                  <BookList />
            </div>
        );
    }
}

export default BookShelf;