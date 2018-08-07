import React, { Component } from 'react';
import SearchBar from './searchbar';
import BookList from './book_list';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    searchForBooks(searchTerm) {
        if (searchTerm !== '') {
            BooksAPI.search(searchTerm)
            .then(booksFromApi => {
                this.setState({ books: booksFromApi })
            })
        }
    }

    updateShelf(book, shelf) {
        BooksAPI.update(book, shelf);
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onSearchTermChange={searchTerm => this.searchForBooks(searchTerm)} />
                <div className="search-books-results">
                <BookList {...this.props} onNewShelfSelected={(book, shelf) => this.updateShelf(book, shelf)} books={this.state.books}/>
                </div>
            </div> 
        );
    }
}

export default SearchPage;