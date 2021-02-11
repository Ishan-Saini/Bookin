const express = require('express');
const booksController = require('./../controllers/bookController');

const router = express.Router();

router.route('/').get(booksController.getAllBooks);

module.exports = router;
