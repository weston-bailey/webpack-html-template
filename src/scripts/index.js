// modules can be used 
const { hello } = require('./module')
// css file just needs to be required in the main js
require('../styles/index.css')
const json = require('./myJson.json')

console.log(json)

console.log('hello from the index')
console.log(hello())

// regular DOM still works!
const myBody = document.querySelector('body')
console.log(myBody)


