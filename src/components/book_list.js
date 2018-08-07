import React, { Component } from 'react';
import BookListItem from './book_list_item';

class BookList extends Component {
    render() {
        const bookListItems = this.props.books.map(book => {
            return <BookListItem {...this.props} key={book.id} book={book} />;
        });

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookListItems}   
                </ol>
            </div>
        );
    }
}

export default BookList;