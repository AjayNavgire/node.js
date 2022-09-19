//json
//JSON stands for JavaScript Object Notation. 
//JSON is a light weight format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.
const fs = require('fs')
const bioData = {
    name: "Ajay",
    age : 27,
    address : "Tuljapur"
}



//json to object
// const objData = JSON.parse(jsonData);
// console.log(objData)


//1: convert to JSON
//2: add to another file
//3: read file
//4: again convert back to original obj
//5: console.log

//1: object to json
const jsonData = JSON.stringify(bioData)

//2:
// fs.writeFile('json1.json', jsonData,()=>{
//     console.log("Done")
// })

//3:
// fs.readFile('json1.json','utf-8',(err,data)=>{
//     console.log(data)
// })
// console.log(jsonData)

//4:
// fs.readFile('json1.json','utf-8',(err,data)=>{ 
// const orgData = JSON.parse(data)
// console.log(orgData)
// })
