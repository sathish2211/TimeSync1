const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/TaskManager');

connection.then(() => {
  console.log('Database TaskManager connected through localhost');
}).catch((err) => {
  console.error('Database connection error:', err);
});

module.exports = { connection };
