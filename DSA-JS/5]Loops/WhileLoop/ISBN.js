//  Q29. ISBN Number :- (International Standard Book Number) is a unique numeric identifier used for books.
// Given an ISBN-10 number, write a program to validate whether the ISBN is correct or not.
// An ISBN-10 consists of 10 digits (d₁ to d₁₀). The ISBN is considered valid if it satisfies the following condition:
// (1×d1​+2×d2​+3×d3​+⋯+10×d10​)mod11=0
// Example ISBN number :- 0-306-40615-2  0306406152 , 1933988177

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a 10 Digit ISBN Number : "));
let count = 0,
  copy = n ;
// Loop to count number of digits in ISBN
while (n>0){
    count++;
    n = Math.floor(n / 10);
} // count = 10 , n= 0
if (count !== 10) console.log("Invalid ISBN No");
else{
    let ans = 0;
    // Loop to calculate ISBN checksum
    while (copy>0){
        // Extract last digit of ISBN
        let dig = copy % 10;
        ans = ans + (count * dig);
        count--;
        // Remove last digit from copy
        copy = Math.floor(copy/10);
    }
    console.log(ans%11==0? "Valid ISBN No" : "Invalid ISBN No");
}