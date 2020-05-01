import React from 'react';
import './style.css';

function SearchBar(props) {
  return (
    <div className="input-group mb-3 searchbar">
      <input
        type="text"
        className="form-control"
        placeholder="search by author or book title"
        aria-label="search by author or book title"
        aria-describedby="book-search"
        onChange={props.handleInputChange}
        value={props.search}
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          type="submit"
          onClick={props.handleFormSubmit}
          id="book-search"
        >
          Find
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
