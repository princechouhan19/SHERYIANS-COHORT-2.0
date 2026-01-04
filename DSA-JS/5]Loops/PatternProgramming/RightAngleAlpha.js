// Q37. Right Angle Triangle
// A 
// A B 
// A B C 
// A B C D 
// A B C D E

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    let ch = 65 ; // ASCII value of 'A'
    for (let j=1 ; j<=i ; j++){
        process.stdout.write(String.fromCharCode(ch) + " ")
        ch++;
    }
    console.log("")
}