let arr = [9, 8 ,1 , 4, 10 , 23 ];
let n = arr.length;

for (let i=0 ; i<n-1 ; i++){
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
}
console.log(arr);

// Insertion Sort Dry Run
// Initial Array:
// Index :  0   1   2   3   4    5
// Value : [9,  8,  1,  4,  10, 23]
// --------------------------------------------------
// PASS 1 (i = 1)
// Key = 8
// Compare with elements to its left:
// j = 0 → index 0, value 9 > 8 → shift 9 to the right
// Insert key (8) at index 0
// Array becomes:
// [8, 9, 1, 4, 10, 23]
// --------------------------------------------------
// PASS 2 (i = 2)
// Key = 1
// Compare with elements to its left:
// j = 1 → index 1, value 9 > 1 → shift 9 to the right
// j = 0 → index 0, value 8 > 1 → shift 8 to the right
// Insert key (1) at index 0
// Array becomes:
// [1, 8, 9, 4, 10, 23]
// --------------------------------------------------
// PASS 3 (i = 3)
// Key = 4
// Compare with elements to its left:
// j = 2 → index 2, value 9 > 4 → shift 9 to the right
// j = 1 → index 1, value 8 > 4 → shift 8 to the right
// j = 0 → index 0, value 1 < 4 → stop
// Insert key (4) at index 1
// Array becomes:
// [1, 4, 8, 9, 10, 23]
// --------------------------------------------------
// PASS 4 (i = 4)
// Key = 10
// Compare with elements to its left:
// j = 3 → index 3, value 9 < 10 → stop
// Insert key (10) at index 4 (no change)
// Array remains:
// [1, 4, 8, 9, 10, 23]
// --------------------------------------------------
// PASS 5 (i = 5)
// Key = 23
// Compare with elements to its left:
// j = 4 → index 4, value 10 < 23 → stop
// Insert key (23) at index 5 (no change)
// Array remains:
// [1, 4, 8, 9, 10, 23] 
// --------------------------------------------------

// Final Sorted Array:
// [1, 4, 8, 9, 10, 23]