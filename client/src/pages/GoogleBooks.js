import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import API from '../utils/API';
import SaveBtn from '../components/SaveBtn';

class GoogleBooks extends Component {
  state = {
    search: '',
    books: [],
    error: '',
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.googleBooks(this.state.search)
      .then(res => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
        this.setState({ books: res.data.items, error: '' });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleIconClick = (title, author, description, image, info, preview) => {
    API.saveBook({
      title: title,
      author: author,
      description: description,
      image: image,
      info: info,
      preview: preview,
    }).catch(err => console.log(err));
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
          {this.state.books.map(book => {
            if (
              book.searchInfo !== undefined &&
              book.volumeInfo.imageLinks !== undefined &&
              book.volumeInfo.authors !== undefined
            ) {
              return (
                <div className="card" key={book}>
                  <SaveBtn
                    saveBook={this.handleIconClick}
                    icon={this.state.icon}
                    author={book.volumeInfo.authors[0]}
                    description={book.searchInfo.textSnippet}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    info={book.volumeInfo.infoLink}
                    preview={book.volumeInfo.previewLink}
                    title={book.volumeInfo.title}
                  />
                  <div key={book}>
                    <BookCard
                      icon={this.state.icon}
                      author={book.volumeInfo.authors[0]}
                      description={book.searchInfo.textSnippet}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      info={book.volumeInfo.infoLink}
                      preview={book.volumeInfo.previewLink}
                      title={book.volumeInfo.title}
                    />
                  </div>
                </div>
              );
            }
          })}
        </Grid>
      </div>
    );
  }
}

export default GoogleBooks;
