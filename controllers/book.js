const { db } = require('../config/connection');

const getBook = (req, res) => {
  db.query('SELECT * FROM books', (err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Internal server error"
      })
    } else {
      return res.status(200).json({
        message: "Success get data",
        data: rows
      })
    }
  })
}

const createBook = (req, res) => {
  // const { name, author, category } = req.body;

  db.query('INSERT INTO books SET ?', req.body, (err, rows) => {
    console.log(req.body);
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error"
      })
    } else {
      return res.status(201).json({
        message: "Success create data",
        data: rows[0]
      })
    }
  })
}

module.exports = { getBook, createBook }