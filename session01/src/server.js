// var http = require('http');
// var fs = require('fs');
// var parse= require("path");
// http.createServer(function (req, res) {
//     fs.readFile(parse.join(__dirname + "/index.html"), function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);
var http = require('http');
var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });
// fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });
// fs.unlink('mynewfile1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });
// fs.rename('myrenamedfile.txt', 'myrenamedfile111.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });
let server=http.createServer(function (req, res) {
    console.log("1111111",req.method);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello111")
    res.end();
    // let data=[
    //     {
    //         name:"hoa",
    //         id:1
    //     },
    //     {
    //         name: "hồng",
    //         id: 2
    //     }
    // ]
    // let string="";
    // data.forEach((item)=>{
    //     string+=`<p onclick=alert("111")>${item.name} </p> `;
    // })
    // let file1=fs.readFileSync('src/index.html', "utf-8");
    // file1 = file1.replace("hello mai",string);
    //     res.writeHead(200,{ 'Content-Type': 'text/html' });
    //     res.write(file1);
    //     return res.end();

}) 
server.listen(8080,()=>{

})
