const express = require('express');
const router = express.Router()
const { getBook, createBook, getbookById, updateBookById, deleteBookById } = require('../controllers/book')

router.get('/book', getBook)
router.post('/book', createBook)
router.get('/book/:id', getbookById)
router.put('/book/:id', updateBookById)
router.delete('/book/:id', deleteBookById)

module.exports = router