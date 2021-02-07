const express = require('express');
const booksRoute = require('./routes/bookRoute');

const app = express();

app.use(express.json());

app.use('/api/v1/books', booksRoute);

module.exports = app;
