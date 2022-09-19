// CURD operation in file system asyncronous
// 9.CURD_operation_file_system_asyncronous

// 1: Create folder
// 2: bio.txt and data into it
// 3: add more data
// 4: read data without getting buffer data
// 5: reaname file
// 6: delete both the file

var fs = require('fs');

// 1: create folder
// fs.mkdir('async',(err) =>{
//     console.log("Folder created")
// });


// 2: create file and add data
// fs.writeFile("./async/bio.txt", "My name is Ajay Navgire", (err)=>{
//     console.log("File created")
// });


// 3: add or update data
// fs.appendFile ("./async/bio.txt"," Plz like my Singing",(err)=>{
//     console.log("File data appended")
// })


// 4: read file
// fs.readFile("./async/bio.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


// 5: rename file
// fs.rename('./async/bio.txt','./async/myBio.txt',(err)=>{
//     console.log('Rename is done')
// })


// 6: delete file
// fs.unlink("./async/myBio.txt",(err)=>{
//     console.log("File deleted")
// })


// 7: delete folder
// fs.rmdir('./async', (err) =>{
//     console.log('Folder deleted')
// })