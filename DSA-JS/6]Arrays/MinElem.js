let arr = [54, 76, 85, 85, 39 , 96, 42];
let min = arr[0];

for (let i=1 ; i<arr.length ; i++){
    if (arr[i]<min){
        min = arr[i];
    }
}
console.log(min);