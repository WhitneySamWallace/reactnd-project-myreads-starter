import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
    render() {
        
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <BookList {...this.props} books={this.props.books} />
            </div>
        );
    }
}

export default BookShelf;