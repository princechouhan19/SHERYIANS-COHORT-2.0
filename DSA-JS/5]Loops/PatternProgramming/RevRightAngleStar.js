// Q38. Inverted Right Angle Triangle
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=n ; i>=1 ; i--){
    for (let j=i ; j>=1 ; j--){
        process.stdout.write("* ")
    }
    console.log("");    
}