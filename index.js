const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), err => {
  if (err) return console.log(err)
  console.log(`listening to the smooth sounds of port ${app.get('port')} in the morning`)
})

module.exports = { server }