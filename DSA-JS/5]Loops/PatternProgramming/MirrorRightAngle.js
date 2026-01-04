// Q39. Mirror Right Angle Triangle
//               * 
//             * * 
//           * * * 
//         * * * * 
//       * * * * *    

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    // Inverted
    for (let j=1 ; j<=n-i ; j++){
        process.stdout.write("  ")
    }
    // Right Angled
    for (let j=1 ; j<=i ; j++){
        process.stdout.write("* ")
    }
    console.log()
}