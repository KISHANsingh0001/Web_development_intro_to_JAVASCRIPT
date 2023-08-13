const express = require("express");
const app = express();
const port = 80;
app.get("/" , (req , res)=>{
 res.send("this is homepage my first  express with harry ")
})

app.get("/about" , (req , res)=>{
    res.send("this is aboutpage my first express with harry ")
   })

   app.post("/about" , (req , res)=>{
    res.send("this is post request  aboutpage my first express with harry ")
   })

app.listen(port , ()=>{
    console.log(`the appliction started sucessfuly on port ${port}`)
})