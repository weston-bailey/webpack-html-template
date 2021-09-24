// modules can be used 
const { hello } = require('./module')
// css file just needs to be required in the main js
require('../styles/index.css')

console.log('hello from the index')
console.log(hello())
