import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import API from '../utils/API';

class GoogleBooks extends Component {
  state = {
    books: [],
    searchbar: '',
  };

  findBooks = query => {
    API.googleBooks(query).then(res =>
      this.setState({ books: res.data.items })
    );
  };

  handleInputChange = event => {
    this.setState({ searchbar: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const search = this.state.searchbar;
    this.findBooks(search);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <Nav />
            <div className="container">
              <h1 className="display-4">Google Books</h1>
              <p className="lead">
                Find the <span className="text-info">perfect</span> book
                (powered by ReactJS and the google books api)
              </p>
              <SearchBar
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </Jumbotron>
        <Grid>
          {/* book.volumeInfo.authors[0] && book.searchInfo.textSnippet && book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.infoLink && book.volumeInfo.previewLink && book.volumeInfo.title */}
          {this.state.books.map(book => (
            <BookCard
              key={book}
              author={book.volumeInfo.authors[0]}
              description={book.searchInfo.textSnippet}
              image={book.volumeInfo.imageLinks.thumbnail}
              info={book.volumeInfo.infoLink}
              preview={book.volumeInfo.previewLink}
              title={book.volumeInfo.title}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default GoogleBooks;
