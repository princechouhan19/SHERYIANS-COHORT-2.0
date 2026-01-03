// Do while :- taking food first and asking for add on ,  ATM machine

//Q31. Repeat hello 
let prompt = require('prompt-sync')();
let n;
do {
    console.log("Hello");
    n = Number(prompt("Enter a number : "));
}while(n==1);