import React, { Component } from 'react';

class BookListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentShelf: ''
        }
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.showImage(this.props.book.imageLinks)}")` }}></div>
                        <div className="book-shelf-changer">
                            <select id="mySelector" onChange={event => this.props.onNewShelfSelected(this.props.book, event.target.value)} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" selected={this.props.book.shelf === 'currentlyReading'}>Currently Reading</option>
                                <option value="wantToRead" selected={this.props.book.shelf === 'wantToRead'}>Want to Read</option>
                                <option value="read" selected={this.props.book.shelf === 'read'}>Read</option>
                                <option value="none" selected={!this.props.book.shelf}>None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.showAuthors(this.props.book.authors)}</div>
                </div>
            </li>
        )
    }

    showAuthors(authors) {
        if (authors && authors.length > 0) {
            return authors.join(', ');
        }
    }

    showImage(image) {
        if (image && image.smallThumbnail) {
            return image.smallThumbnail;
        }
    }
}

export default BookListItem;