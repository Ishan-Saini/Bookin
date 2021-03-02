const mongoose = require('mongoose');
const Books = require('./../model/booksModel');
const Book = require('./../model/booksModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllBooks = catchAsync(async (req, res) => {
  const books = await Book.find();

  res.status(200).json({
    status: 'success',
    results: books.length,
    data: {
      books,
    },
  });
});

exports.getBook = catchAsync(async (req, res) => {
  const book = await Book.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      book,
    },
  });
});

exports.addBook = catchAsync(async (req, res) => {
  await Books.create(req.body);

  res.status(200).json({
    status: 'success',
  });
});

exports.deleteBook = catchAsync(async (req, res) => {
  await Books.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
  });
});

exports.updateBook = catchAsync(async (req, res) => {
  await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
  });
});
