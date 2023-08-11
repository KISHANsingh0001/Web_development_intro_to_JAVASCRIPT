const fs = require("fs");
let text = fs.readFileSync("dele.txt" , "utf-8");
text = text.replace("there" , "their");

console.log("the contant of the file is ")
console.log(text);
console.log("creating the new file ");
fs.writeFileSync("rohan.txt" , text); // for creating the new file 
