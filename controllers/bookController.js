const mongoose = require('mongoose');
const Book = require('./../model/booksModel');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      status: 'success',
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};
