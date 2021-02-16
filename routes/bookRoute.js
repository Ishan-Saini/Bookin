const express = require('express');
const booksController = require('./../controllers/bookController');

const router = express.Router();

router
  .route('/')
  .get(booksController.getAllBooks)
  .post(booksController.addBook);

router
  .route('/:id')
  .get(booksController.getBook)
  .delete(booksController.deleteBook)
  .patch(booksController.updateBook);

module.exports = router;
