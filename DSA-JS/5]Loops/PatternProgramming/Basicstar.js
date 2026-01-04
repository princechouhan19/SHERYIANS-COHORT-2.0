// * * * * * * * * * *

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    process.stdout.write("* " + i);
}