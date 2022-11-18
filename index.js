const express = require('express');
const app = express()
const bookRoutes = require('./routes/book')
const port = 3000

app.use(express.json())

app.use('/api', bookRoutes)

app.listen(port, () => {
  console.log(`run on port ${port}....`);
})