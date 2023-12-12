var express= require("express");
var app= express();
 var router= require("./api");
 const cors= require("cors");
 app.use(cors({
     origin:"*"
 }))
// var router1=express.Router();
// app.get("/",(req,res)=>{
//     res.write("hello");
//     res.end()
// })
// định nghĩa 1 tuyến đường 
// router1.get("/",(req,res)=>{
//     res.write("hello product");
//     res.end()
// })
app.use("/",router);
// app.get("/products", (req, res) => {
//     res.write("hello products");
//     res.end()
// })
app.listen(8080,()=>{
    console.log("nodejs");
})