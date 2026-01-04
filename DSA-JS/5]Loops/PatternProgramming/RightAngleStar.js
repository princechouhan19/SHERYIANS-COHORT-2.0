// Q35. Right Angle Triangle
    // * 
    // * * 
    // * * * 
    // * * * * 
    // * * * * *

// i = row 
// j = column

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    for (let j=1 ; j<=i ; j++){
        process.stdout.write("* ");
    }
    console.log("");
}