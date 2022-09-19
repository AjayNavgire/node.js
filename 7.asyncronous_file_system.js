//Asyncronous file system

//take multiple requirest - asyncronous
//take single requirest = syncronous


var fs = require('fs');

//create new file
//when you work on asyncronous you have to callback
//asyncronous is all about callback
// fs.writeFile("read.txt",'Today is awesome day',
// (err)=>{
//     console.log("File is created")
// });

// we pass them a function as an argument - a callback -  
// that gets called when that task completes.
// The callback has an argument that tells you whether the
// operation completed successfully.
// Now we need to say what to do when fs.writeFile has 
// completed (even if it's nothing), and start 
// checking for errors.




//update file
// fs.appendFile('read.txt',"Plz like my singing", (err) => {
//     console.log("Task completed")
// });


// //read file
fs.readFile('read.txt','UTF-8',(err, data) =>{
    console.log(data)
})
