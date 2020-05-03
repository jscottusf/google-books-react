const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_react'
);

const bookSeed = [
  {
    authors: ['Suzanne Collins'],
    description:
      'First in the ground-breaking HUNGER GAMES trilogy. Set in a dark vision of the near future, a terrifying reality TV show is taking place.Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games.',
    image:
      'http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    link:
      'http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api',
    title: 'The Hunger Games',
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
