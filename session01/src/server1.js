
var http =  require("http");
// tạo server

var url  =  require("url");
// tạo url  để lấy đường dẫn thông qua request
var fs   = require ("fs");
// đọc file
//xoá,update,tạo,rename,
let server = http.createServer(function (req, res) {
    let url1 = url.parse(req.url);
    let method= req.method;
    if (method=="GET"){
        console.log("22222,đã ăn vào phương thức get!");
        if(url1.pathname =="/users"){
            console.log("đã đúng url users");
            let data= fs.readFileSync("src/db.json","utf-8");
            res.writeHead(200,{"Content-Type":"application/json"});
            res.write(data);
            return res.end();
        }
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
})
server.listen(8080,()=>{
    console.log("đã vào!");
})