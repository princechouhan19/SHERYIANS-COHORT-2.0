// Q44. Max element from array 

let arr = [54, 76, 85, 85, 39 , 96, 42];
let max = arr[0];

for (let i=1 ; i<arr.length ; i++){
    if (arr[i]>max){
        max = arr[i]
    }
}
console.log(max);