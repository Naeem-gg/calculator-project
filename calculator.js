const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sum = num1 + num2;

// console.log(req.body);
res.send(`<p>Thanks dude. heres your sum<br> sum = ${sum}</p>`);
console.log("This is console logs");

});

app.get("/bmicalculator",(req,res) =>{
    res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmicalculator", (req, res) => {
    console.log(req.body);
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let bmi = weight / (height * height);
    res.send(`Thanks man<br> this is your bmi [BMI = ${bmi}]`);

});
app.listen("3000", () =>{

    console.log("express server is up and running by nodemon at port 3000");
});