// Q44. Max element from array

let arr = [54, 76, 85, 89, 39 , 96, 42];
let max = arr[0] , smax = arr[1];

for (let i=2 ; i<arr.length ; i++){
    if (arr[i]>max){
        smax = max;
        max = arr[i];
    }
    else if (arr[i]>smax && arr[i]!=max){
        smax = arr[i]
    }
}
console.log("Maximum value is = " + max);
console.log("Second Maximum value is = " + smax);