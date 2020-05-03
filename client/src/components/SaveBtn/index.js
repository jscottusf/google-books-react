import React from 'react';
import './style.css';

function SaveBtn(props) {
  return (
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
      <i className="fas fa-heart icon"></i>
    </div>
  );
}

export default SaveBtn;
