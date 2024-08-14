const express = require('express');
const dotenv = require('dotenv');
const { connection } = require('./config/database'); // Adjust the path as needed
const app = require('./app'); // Import the existing app configuration

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000; // Define a default port if not set in the environment variables

// Database connection and server start
connection.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is working on port: http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection error:', err);
});
