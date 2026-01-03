// Q33. Sasta Calculator 

let prompt = require('prompt-sync')();
let n;
do{
    console.log("1] Addition");
    console.log("2] Subtraction");
    console.log("3] Reset");
    n = Number(prompt("Select Operation : "));
    let a  = Number(prompt("Enter First Number : "));
    let b  = Number(prompt("Enter Second Number : "));
    switch(n){
        case 1: {
            console.log("Addition = " + (a+b));
            break;
        }
        case 2: {
            console.log("Subtraction = " + (a-b));
            break;
        }
        default: console.log("❌Invalid Number");
    }
}while(n==3);