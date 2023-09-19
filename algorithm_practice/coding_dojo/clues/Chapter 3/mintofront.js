/*
Array: Min to Front

Given an array of comparable values, move the lowest element to array's front,
shifting backward any elements previously ahead of it. Do not otherwise change
the array's order. Given [4, 2, 1, 3, 5], change it to [1, 4, 2, 3, 5] and return it.
*/

function minToFront(arr) {
    let min = arr[0];
    let myIndex = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            myIndex = i;
        }
    }
    for (let x = myIndex; x > 0; x--){
        let temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

let arr1 = [4, 2, 1, 3, 5];
let arr2 = [2, 3, 5, 6, 7, 8, 1, 10, 9];
console.log(minToFront(arr1));
console.log(minToFront(arr2));
