import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={event => this.onInputChange(event.target.value)} value={this.state.searchTerm} />

                </div>
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm: searchTerm });
        this.props.onSearchTermChange(searchTerm);
    }
}

export default SearchBar;