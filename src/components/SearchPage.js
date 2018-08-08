import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
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
                if (booksFromApi.error == undefined) {

                    const processedBooks = booksFromApi.map(searchResultBook => {
                        // Don't use "The Linux Command Line" for testing -- there are three duplicate results, each with a different ID.
                        const match = this.props.books.find(element => element.id === searchResultBook.id);
                        if(match) {
                            searchResultBook.shelf = match.shelf;
                        }
                        return searchResultBook;
                    });

                    this.setState({ books: processedBooks });
                } else {
                    this.setState({ books: [] });
                }
            })
        }
    }

    updateShelf(book, shelf) {
        BooksAPI.update(book, shelf);
    }

    render() {

        const searchResults = (this.state.books.length > 0)
        ? <BookList books={this.state.books} onNewShelfSelected={this.props.onNewShelfSelected} />
        : <h2>No results found</h2>;

        return (
            <div className="search-books">
                <SearchBar onSearchTermChange={searchTerm => this.searchForBooks(searchTerm)} />
                <div className="search-books-results">
                    {searchResults}
                </div>
            </div> 
        );
    }
}

export default SearchPage;