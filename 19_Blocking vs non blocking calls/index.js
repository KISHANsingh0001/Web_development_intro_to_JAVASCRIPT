// sybchronous or blocking --> Line by line Execution
// Asybchronous or non blocking --> Line by line Execution not guaranteed callbacks will fire 

const fs = require("fs");
fs.readFile("dele.txt" , "utf-8" , (err , data)=>{
    console.log(err,data);    
});
console.log("this is a message");