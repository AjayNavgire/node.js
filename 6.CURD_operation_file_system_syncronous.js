//CURD operation in File System
var fs = require('fs');

//create folder
// fs.mkdirSync('CURD')

//create new file and data
// fs.writeFileSync('CURD/bio.txt',"My name is Ajay")

//update data
// fs.appendFileSync('CURD/bio.txt',"My name is Ajay, From Tuljapur")

//read data
// const data = fs.readFileSync('CURD/bio.txt')
// console.log(data)
//encode to read data (utf8)
// const data = fs.readFileSync('CURD/bio.txt','utf8')
// console.log(data)

//rename file
// fs.renameSync('CURD/mybio.txt','CURD/bio.txt')


//delete file
// fs.unlinkSync('CURD/bio.txt')

//delete folder
// fs.rmdirSync('CURD')