// Q26. Write a program to take two inputs a and b and find the value of a ^ b

let prompt = require("prompt-sync")();
let a = Number(prompt("Enter Base Value : "));
let b = Number(prompt("Enter Power Value : "));
let pow = 1 ;

for (let i=1 ; i<=b ; i++){
    pow *= a ;
}
console.log("Result :", pow);