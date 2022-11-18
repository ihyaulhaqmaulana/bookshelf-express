const express = require('express');
const router = express.Router()
const { getBook, createBook } = require('../controllers/book')

router.get('/book', getBook)
router.post('/book', createBook)

module.exports = router