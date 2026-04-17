const express = require("express");
const app = express();
const port = 8000;
const sum = require("./sum.js");

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Working");
})

app.get("/getSum/:a/:b",(req,res)=>{
    const {a,b} = req.params;
    return res.json({
        ans : sum(parseInt(a),parseInt(b))
    })
})