import React from 'react';
import './style.css';

function BookCard() {
  return (
    <div class="card">
      <div class="icon">
        <a href="/save">
          <i class="fas fa-heart icon save" id="save"></i>
        </a>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <img
              src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              alt="book"
            />
          </div>
          <div class="col-9">
            <h5 class="card-title">The Hunger Games</h5>
            <h6 class="card-subtitle mb-2 text-muted">Suzanne Collins</h6>
            <div class="card-text mb-1">
              First in the ground-breaking HUNGER GAMES trilogy. Set in a dark
              vision of the near future, a terrifying reality TV show is taking
              place. Twelve boys and twelve girls are forced to appear in a live
              event called The Hunger Games.
            </div>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
