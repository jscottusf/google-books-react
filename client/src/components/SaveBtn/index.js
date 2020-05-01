import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SaveBtn() {
  return (
    <div className="icon">
      <Link to="/">
        <i className="fas fa-heart icon save" id="save"></i>
      </Link>
    </div>
  );
}

export default SaveBtn;
