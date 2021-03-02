const express = require('express');
const booksRoute = require('./routes/bookRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());

app.use('/api/v1/books', booksRoute);

app.use(globalErrorHandler);

module.exports = app;
