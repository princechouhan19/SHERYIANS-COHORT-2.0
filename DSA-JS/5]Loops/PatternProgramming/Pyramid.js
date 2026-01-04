// Q39. Pyramid
//     * 
//    * *
//   * * *
//  * * * *
// * * * * *

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    for (let j=1 ; j<=n-i ; j++){
        process.stdout.write(" ")
    }
    for (let j=1 ; j<=i ; j++){
        process.stdout.write("* ")
    }
    console.log()
}