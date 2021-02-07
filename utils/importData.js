const fs = require('fs');
const mongoose = require('mongoose');
const Books = require('./../model/booksModel');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('DB connection successful'));

const booksData = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/books.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Books.create(booksData);
    console.log('Data imported successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Books.deleteMany();
    console.log('Data deleted successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
