let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));
let count = 0;

while (n>0) {
    count++;
    n = Math.floor(n / 10); 
}
console.log(count);