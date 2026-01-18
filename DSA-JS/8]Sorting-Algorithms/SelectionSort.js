let arr = [9, 8 ,1 , 4, 10 , 23 ];
let n = arr.length;

for (let i=0 ; i<n-1 ; i++){
    let min =i;
    for (let j=i+1 ; j<n ; j++){
        if(arr[j]<arr[min]) min = j;
    }
    if (min != i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
console.log(arr);
// Selection Sort Dry Run
// Initial Array:
// Index :  0   1   2   3   4    5
// Value : [9,  8,  1,  4,  10, 23]

// --------------------------------------------------
// PASS 1 (i = 0)
// Assume minimum is at index 0 (value = 9)

// Compare with remaining elements:
// j = 1 → index 1, value 8  < 9  → min = 1
// j = 2 → index 2, value 1  < 8  → min = 2
// j = 3 → index 3, value 4  > 1  → no change
// j = 4 → index 4, value 10 > 1  → no change
// j = 5 → index 5, value 23 > 1  → no change

// Swap index 0 (9) with index 2 (1)
// Array becomes:
// [1, 8, 9, 4, 10, 23]

// --------------------------------------------------
// PASS 2 (i = 1)
// Assume minimum is at index 1 (value = 8)

// j = 2 → index 2, value 9  > 8 → no change
// j = 3 → index 3, value 4  < 8 → min = 3
// j = 4 → index 4, value 10 > 4 → no change
// j = 5 → index 5, value 23 > 4 → no change

// Swap index 1 (8) with index 3 (4)
// Array becomes:
// [1, 4, 9, 8, 10, 23]

// --------------------------------------------------
// PASS 3 (i = 2)
// Assume minimum is at index 2 (value = 9)

// j = 3 → index 3, value 8  < 9 → min = 3
// j = 4 → index 4, value 10 > 8 → no change
// j = 5 → index 5, value 23 > 8 → no change

// Swap index 2 (9) with index 3 (8)
// Array becomes:
// [1, 4, 8, 9, 10, 23]

// --------------------------------------------------
// PASS 4 (i = 3)
// Assume minimum is at index 3 (value = 9)

// j = 4 → index 4, value 10 > 9 → no change
// j = 5 → index 5, value 23 > 9 → no change

// No swap needed
// Array remains:
// [1, 4, 8, 9, 10, 23]

// --------------------------------------------------
// PASS 5 (i = 4)
// Assume minimum is at index 4 (value = 10)

// j = 5 → index 5, value 23 > 10 → no change

// No swap needed
// Array remains:
// [1, 4, 8, 9, 10, 23]

// --------------------------------------------------
// FINAL SORTED ARRAY:
// [1, 4, 8, 9, 10, 23]