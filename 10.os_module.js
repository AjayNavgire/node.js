// Operating system module to get operating system

// The 'OS' module provides operating system-related utility methods and properties.
const os = require('os')

//check version
// console.log(os.arch())   //x64 

//check host name
// console.log(os.hostname());              //DESKTOP-E7G065Q

//check platform
// console.log(os.platform());                 //win32 

// check folder locationtemproty folder
// console.log(os.tmpdir())

//check operating system
// console.log(os.type())                         //Windows_NT


//check ram
// const freeMemory = os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`)                //3490398208 bites


//check total ram
// const totalMemory = os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`)    //7.6 ram

