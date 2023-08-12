console.log("This is Module JavaScript");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// module.exports = average;
// module.exports = {
//     avg: average,
//     name: "Harry",
//     repo: "GitHub"
// }
module.exports .name = "Kishan singh thakur"