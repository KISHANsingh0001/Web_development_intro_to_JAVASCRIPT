console.log(" this is our javascript file ");

function greet(name , greetText) { // this state is function defination
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}


function sum(a , b , c) {
    let d = a + b + c;
    return d;
}

let name1 = "harry";
let name2 = "shubham";
let name3 = "Rohan";
let name4 = "Sager";
let greetText = "Good Morning";
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");
greet(name1 , greetText);
greet(name2 , greetText);   // this state is a function call 
greet(name3 , greetText);  
greet(name4 , greetText);

console.log(sum(2 , 3 , 5));