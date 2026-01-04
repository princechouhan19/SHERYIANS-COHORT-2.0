let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));
let copy = n ;
let ans=0;

while (n>0){
    let dig = n%10;
    let fact = 1;
    for (let i=1 ; i<=dig ; i++){
        fact *= i ;
    }
    ans += fact;
    n = Math.floor(n/10);
}
if (copy===ans) console.log(copy + " is a " + "Strong Number");
else console.log(copy + " is not a " + "Strong Number");
