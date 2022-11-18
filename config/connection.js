const mysql = require('mysql');
require('dotenv').config()


const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME
})

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success connect db');
  }
})

module.exports = { db }