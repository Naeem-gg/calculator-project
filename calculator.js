const express = require("express");
const app = express();

app.listen(3000,function(){

app.get("/",(req,res)=>{
    console.log("running with nodemon...")
    res.send("Hello World!");
})

});