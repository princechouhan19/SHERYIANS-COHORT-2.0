// Break :- Immediately terminates the nearest loop (for/while/do...while) or switch.
// Working: Control transfers to the first statement after that loop or switch.

// Continue :- Skips the remaining code in the current loop iteration.
// Working: Control returns to the loop's condition/update to start the next iteration.

// Difference :- break exits the loop or switch entirely; continue only skips the current iteration.

for (let i=1 ; i<=10 ; i++){
    if(i==4) continue
    else if (i==8) break
    console.log(i);
}

// 1
// 2
// 3
// 5
// 6
// 7