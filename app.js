const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('The is My first ')
})

app.get('/popular/langueges/:languege', (req, res) => {
  console.log('req is', req.params.languege)
  res.send(`The is My first ${req.params.languege}`)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})