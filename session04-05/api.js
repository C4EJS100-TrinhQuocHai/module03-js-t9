var express= require("express");
const router= express.Router();

router.get("/api/products",(req,res)=>{
    res.write("hello product")
    res.end();
})
router.get("/api/user", (req, res) => {
    res.write("hello user")
    res.end();
})
module.exports=router
