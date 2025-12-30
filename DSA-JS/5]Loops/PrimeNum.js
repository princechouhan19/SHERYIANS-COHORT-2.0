// Q25. Check whether a number is Prime or Not Prime .

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number : "));
let isPrime = true;
if (n <= 1 && n % 2 == 0) isPrime = false;
else if (n == 2) isPrime = true;
else {
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
