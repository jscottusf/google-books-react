import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function BookCard(props) {
  return (
    <div className="card">
      <div
        className="icon"
        onClick={() =>
          props.saveBook(
            props.title,
            props.author,
            props.description,
            props.image,
            props.info,
            props.preview
          )
        }
        role="button"
        tabIndex="0"
      >
        <i className="fas fa-heart icon save" id="save"></i>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="col-9">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
            <div className="card-text mb-1">{props.description}</div>
            <a href={props.info} className="card-link">
              Info
            </a>
            <a href={props.preview} className="card-link">
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
