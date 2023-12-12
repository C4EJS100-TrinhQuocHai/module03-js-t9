const express= require("express");
const app= express();
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static('public'));
app.get("/home",(req,res)=>{
    let name="minh thảo";
    let students=[
        {
            name:"hoa",
            id:1
        },
        {
            name: "hồng",
            id: 2
        },
        {
            name: "huệ",
            id: 3
        }

    ]
    res.render("index.ejs",{name,students})
})
app.listen(8080,()=>{
    console.log("đang gọi server");
})