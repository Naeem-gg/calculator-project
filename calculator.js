const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});
app.post("/",(req,res)=>{
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let add = num1 + num2;

    res.send("Kya bat hai bassa, le addition: "+add);
    res.end();
})
app.listen(3000,function(){
    console.log("running with nodemon...")

});