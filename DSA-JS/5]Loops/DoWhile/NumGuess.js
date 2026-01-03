// Q32. Guess the number

let prompt = require('prompt-sync')();
let ans = Math.floor((Math.random()*100)+1);
let user , attemp = 0;
do {
    attemp++;
    user = Number(prompt("Guess the Number : "));
    if (user>ans) console.log("Larger ⬆️");
    else if(user<ans) console.log("Smaller ⬇️");
    else if (user==ans) console.log("✅ Correct Guess in " + attemp + " attempts");
    else if (user>100) console.log("Invalid No");
}while(user!=ans);