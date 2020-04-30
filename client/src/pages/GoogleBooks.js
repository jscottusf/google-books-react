import React, { Component } from 'react';
//import Grid from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
//import { link } from 'react-router-dom';

class GoogleBooks extends Component {
  state = {
    books: [],
    searchbar: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <div>
            <Nav />
            <div class="container">
              <h1 class="display-4">Google Books</h1>
              <p class="lead">
                Find the <span class="text-info">perfect</span> book (powered by
                ReactJS and the google books api)
              </p>
              <SearchBar />
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

export default GoogleBooks;
