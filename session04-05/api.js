var express= require("express");
const router= express.Router();
let role="admin"
router.get("/api/products/:id1",(req,res,next)=>{
    console.log("2222222",req.params.id1);
    if(role=="admin"){
        next()
    }
   else{
     res.write("bạn không đủ quyền !")
   }
    //  res.write("hello product")
    res.end(); 
    // check kiểm tra 1 tác vụ j đó
    // nếu thoả mãn thì next
    // không thì res.write("bạn không có quyền")
}, (req, res, next)=>{
    next()
    // res.write("chạy qua middleware1")
    res.end();
}, (req, res, next) => { 
  
    //  res.writeHead(200, { 'Content-Type': 'application/json' }, "utf-8");
    res.send("<h1>chạy qua middleware lần 21</h1>")
    // res.end();
}
)
router.get("/api/user",(req, res) => {
    res.json("hello user11");
    res.end()
})
module.exports=router
