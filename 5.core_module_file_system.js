var fs = require('fs');//core modules

//A set of functions you want to include in your application.
//Node.js has a set of built-in modules which you can use without any further installation.
//core modules are built-in modules
//we can use it with require



//File System module (fs module)
// Read files
// Create files
// Update files
// Delete files
// Rename files


//create file
//creating a new file if there is no file
//  fs.writeFileSync('read.txt','welcome to my channel');

//update file
//over write data and delete existing data
// fs.writeFileSync('read.txt','Ajay Navgire, Welcome to my channel' );


//not delete existing data and add data(upend data)
// fs.appendFileSync('read.txt', " How are you I am fine Thank You")


//read data in file
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data)
// Node.js includes an additional data type called Buffer
// (not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// While reading from a file or receiving packets over the network.

{/* <Buffer 41 6a 61 79 20 4e 61 76 67 69 72 65 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 48 6f 77 20 61 72 65 20 79 6f 75 20 49 20 61 ... 79 more bytes> */}

// Ajay Navgire, Welcome to my channelHow are you I am fine Thank You


//rename file

fs.renameSync('readwrite.txt','read.txt')