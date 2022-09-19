//local module
//create and export module in node.js
//every individual file in node.js is module

const {add, sub, mult, name} = require('./12.oper')


console.log(add(5,5))
console.log(sub(10,5))
console.log(mult(10,5))
console.log(name)
