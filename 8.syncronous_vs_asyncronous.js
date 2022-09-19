//syncronous vs asyncronous

var fs = require('fs');

//syncronous
//wait for a task to complete one by one

// const data = fs.readFileSync('read.txt','UTF-8')

// console.log(data);
// console.log(" after the data")



// asyncronous
// handle request parallally not wait for another req to complete
// 
fs.readFile('read.txt', 'utf-8', (err, data)=>{
    console.log(data)
})

console.log("after the data")