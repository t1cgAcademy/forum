const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/forum')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
