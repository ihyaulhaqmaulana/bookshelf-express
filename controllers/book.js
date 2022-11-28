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

const getbookById = (req, res) => {
  const id = req.params.id

  db.query('SELECT * FROM books WHERE id = ?', id, (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error"
      })
    } 
    
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Data not found",
      })
    } else {
      return res.status(200).json({
        message: 'Success get data',
        data: rows[0]
      })
    }
  })
}

const updateBookById = (req, res) => {
  const id = req.params.id
  // const { name, author, category } = req.body

  db.query('UPDATE books SET ? WHERE id = ?', [req.body, id], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error"
      })
    } 

    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Data not found",
      })
    } else {
      return res.status(201).json({
        message: 'Success update data',
        data: rows[0]
      })
    }
  })
}

const deleteBookById = (req, res) => {
  const id = req.params.id

  db.query('DELETE FROM books WHERE id = ?', id, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal server error"
      })
    } else {
      return res.status(200).json({
        message: "Success delete data",
      })
    }
  })
}

module.exports = { getBook, createBook, getbookById, updateBookById , deleteBookById}