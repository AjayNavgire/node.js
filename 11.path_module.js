//path module in node.js

//The path module provides utilities for working with file and directory path.

var path = require('path');

//file path
console.log(path.dirname('G:/Videos/Tech Gun/Node.js/Node/index.js'))

//know file type
console.log(path.extname('G:/Videos/Tech Gun/Node.js/Node/index.js'))

//know file name
console.log(path.basename('G:/Videos/Tech Gun/Node.js/Node/index.js'))

//returns an object whose properties represent significant element of the path.
//return above mehtods
console.log(path.parse('G:/Videos/Tech Gun/Node.js/Node/index.js'))


const myPath = path.parse('G:/Videos/Tech Gun/Node.js/Node/index.js')
console.log(myPath.name)
console.log(myPath.root)