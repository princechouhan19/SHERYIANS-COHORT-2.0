// Q41. Print an V
//     *       *
//      *     *
//       *   *
//        * *
//         * 

let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a Number : "));

for (let i = 1; i <= n; i++) {

    if (i > n - i + 1) break;

    for (let j = 1; j <= n; j++) {
        if (j == i || i + j == n + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log("");
}

// j == i  → prints the left diagonal
//           because column number equals row number
//
// i + j == n + 1 → prints the right diagonal
//                  because row + column equals (n + 1)
//
// if (i > n - i + 1) → stops printing after diagonals meet
//                      so only the top half is printed
//
// Using both diagonal conditions together,
// but stopping early, forms a V pattern instead of X