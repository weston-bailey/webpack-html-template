const path = require('path')
const express = require('express');
const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

app.get('/error-test', () => {
  throw new Error('test error')
})

app.use((req, res) => {
  res.status(404).send(`cannot ${req.method} ${req.url}`)
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('internal server error')
})

const server = app.listen(app.get('port'), err => {
  if (err) return console.log(err)
  console.log(`listening to the smooth sounds of port ${app.get('port')} in the morning`)
})

module.exports = { server }