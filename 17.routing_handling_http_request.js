//routing and handling http request



//HTTP response status codes
// 1. Infromation (100-199)
// 2. Successful (200-299)
// 3. Redirects (300-399)
// 4. Client error (400-499)
// 5. Server error (500-599)


const http = require("http");


const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url=="/"){
    res.end('Hello from the home sides');
    }else if(req.url == "/contact"){
        res.end("Hello from the contact US sides")
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 error page does not exist</h1>")
    }

});

server.listen(8000, "127.0.0.1",()=>{
    console.log("Server is listening to the port on 8000")
});


