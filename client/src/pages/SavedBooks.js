import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import BookCard from '../components/BookCard';

class SavedBooks extends Component {
  state = {
    favorites: [],
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
          <BookCard />
        </Grid>
      </div>
    );
  }
}

export default SavedBooks;
