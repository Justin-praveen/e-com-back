const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    res.json("hai buddy welcome...!")
})

app.listen(9090,()=>{
    console.log("its working...!")
})