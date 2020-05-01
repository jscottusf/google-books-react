import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import BookCard from '../components/BookCard';
import API from '../utils/API';

class SavedBooks extends Component {
  state = {
    favorites: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ favorites: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <Nav />
            <div class="container" style={{ 'margin-bottom': 70 }}>
              <h1 class="display-4">Google Books</h1>
              <p class="lead">
                <span class="text-info">Favorite </span>
                books
              </p>
            </div>
          </div>
        </Jumbotron>
        <Grid>
          {this.state.favorites.map(book => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              info={book.info}
              preview={book.preview}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default SavedBooks;
