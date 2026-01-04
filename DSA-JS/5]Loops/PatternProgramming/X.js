// Q42.** Print an X
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i=1 ; i<=n ; i++){
    for(let j=1 ; j<=n ; j++){
        if (j==i || (i+j==n+1)) process.stdout.write("* ");
        else process.stdout.write("  ")
    }
    console.log("")
}

// j == i  → prints the main diagonal (top-left to bottom-right)
//            because in a square matrix, row number equals column number
//
// i + j == n + 1 → prints the secondary diagonal (top-right to bottom-left)
//                  because row + column equals (n + 1) at those positions
//
// Using OR (||) prints both diagonals together, forming an X pattern
