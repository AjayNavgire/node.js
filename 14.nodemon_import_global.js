//nodemon and import global npm module;

//how to import global npm module
//npm install nodemon -g


//nodemon
//it's tool that help develop node.js based application by automatically restarting the 
//node application when file changes in the directory are detected.


const chalk = require('chalk');
console.log(chalk.red.underline('Hello world!!! 🎉🎉🎉'));

var validator = require('validator');
var res = validator.isEmail('ajay@bar.c')
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res)); //=> true


