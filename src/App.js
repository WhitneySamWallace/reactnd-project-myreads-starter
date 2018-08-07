import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BookShelfPage from './components/book_shelf_page';
import SearchPage from './components/search_page';
import './App.css';

class BooksApp extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={BookShelfPage} />
        </div>
       </BrowserRouter> 
    );
  }
}

export default BooksApp
