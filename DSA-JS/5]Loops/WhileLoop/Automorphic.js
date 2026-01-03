// Q30. Automorphic Number :- is a number whose square ends with the same digits as the number itself. 
// In other words, a number n is automorphic if the last d digits of n² are exactly equal to n, where d is the number of digits in n.
// Example 1
// Input: n = 5
// n² = 25
// Last digit of 25 = 5
// Result: Automorphic

// Example 2
// Input: n = 76
// n² = 5776
// Last two digits = 76
// Result: Automorphic

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));
let sq = n*n , count = 0 , copy = n ;

while (n>0){
    count++;
    n = Math.floor(n/10);
}
if (sq%Math.pow(10,count)==copy){
    console.log("Automorphic No");
} else {
    console.log("Non Automorphic No");
}