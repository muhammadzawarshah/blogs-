const express =require("express");
const path = require("path");
const app=express();
const PORT=process.env.PORT||5000;


app.use(express.static(path.join(__dirname,"./public/")));
app.use(express.static(path.join(__dirname,"./components")));
app.use(express.static(path.join(__dirname,"./images")));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.listen(PORT,(req,res)=>{
    console.log('the server started on ${port}')
})