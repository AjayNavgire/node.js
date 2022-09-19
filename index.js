// API 
// Application Programming Interface
// Which is a software intermediary that allows two applications to talk to each other.
// Service which allows request to a data


const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url=="/"){
    res.end('Hello from the home sides');
    }else if(req.url == "/contact"){
        res.end("Hello from the contact US sides")
    }else if(req.url == "/userapi"){
        fs.readFile(`user.json`,()=>{
            console.log("")
        })
        res.end("Hello from the user API sides")
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 error page does not exist</h1>")
    }

});

server.listen(8000, "127.0.0.1",()=>{
    console.log("Server is listening to the port on 8000")
});