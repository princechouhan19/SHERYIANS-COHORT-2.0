let arr = [54, 76, 85, 85, 39 , 96, 42];
let min = arr[0] , Smin = arr[1];

for (let i=2 ; i<arr.length ; i++){
    if (arr[i]<min){
        Smin = min;
        min = arr[i];
    }
    else if (arr[i]<Smin && arr[i] != min){
        Smin = arr[i];
    }
}
console.log("Minimum value is = " + min);
console.log("Second Mainimum value is = " + Smin);