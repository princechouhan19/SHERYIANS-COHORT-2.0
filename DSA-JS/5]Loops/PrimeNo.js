// Q25. Check whether a number is Prime or Not Prime

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number : "));

// Step 1: Numbers less than or equal to 1 are NOT prime
// Prime numbers must be greater than 1
if (n <= 1) {
  console.log("Not Prime No");
} else {
  // Step 2: Initialize a counter to track how many divisors are found
  // If count remains 0, the number is prime
  let count = 0;
  // Step 3: Loop from 2 to n/2
  // A number cannot have a factor greater than n/2 (except itself)
  for (let i = 2; i <= n / 2; i++) {
    // Step 4: Check if n is divisible by i
    // If yes, then n has a divisor other than 1 and itself
    if (n % i == 0) {
      count++; // increment count when a divisor is found
    }
  }
  // Step 5: If no divisors were found, count will be 0
  // Hence, the number is prime
  if (count == 0)
    console.log("Prime No");
  else
    console.log("Not Prime No");
}