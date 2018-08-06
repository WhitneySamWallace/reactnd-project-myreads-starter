import React, { Component } from 'react';
import SearchBar from './searchbar';
import BookList from './book_list';

class SearchPage extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchBar />
                <div className="search-books-results">
                <BookList />
                </div>
            </div> 
        );
    }
}

export default SearchPage;