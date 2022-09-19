
//node package manager
//It is package manager for the JS 
//It is default package manager for the JS runtime environment Node.js




//validator package
//slider package
//react package
//chalk package

//package.json file
//npm packages installed list in this file
//development dependancy and dev(develper)-dependancy 


const chalk = require('chalk');
console.log(chalk.red.underline('Hello world!!! 🎉🎉🎉'));

var validator = require('validator');
var res = validator.isEmail('ajay@bar.com')
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res)); //=> true
