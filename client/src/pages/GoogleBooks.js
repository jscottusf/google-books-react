import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import API from '../utils/API';
import Alert from '../components/Alert';
import SaveBtn from '../components/SaveBtn';

class GoogleBooks extends Component {
  state = {
    search: '',
    books: [],
    error: '',
    added: false,
    failed: false,
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.setState({
    //   books: this.state.books.splice(0, this.state.books.length),
    // });
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
    }).catch(err => this.setState({ failed: true }));
    this.setState({ added: true });
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
        <Alert
          style={{
            opacity: this.state.added ? 1 : 0,
            opacity: this.state.failed ? 1 : 0,
          }}
          type={this.state.failed ? 'danger' : 'success'}
        >
          Book added to your saved list
        </Alert>
        <Grid>
          {this.state.books.map(book => {
            if (
              book.searchInfo !== undefined &&
              book.volumeInfo.imageLinks !== undefined &&
              book.volumeInfo.authors !== undefined
            ) {
              return (
                <div className="card" key={book}>
                  <SaveBtn handleIconClick={this.handleIconClick} />
                  <div key={book}>
                    <BookCard
                      icon={this.state.icon}
                      author={book.volumeInfo.authors[0]}
                      description={book.searchInfo.textSnippet}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      info={book.volumeInfo.infoLink}
                      preview={book.volumeInfo.previewLink}
                      title={book.volumeInfo.title}
                    ></BookCard>
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
