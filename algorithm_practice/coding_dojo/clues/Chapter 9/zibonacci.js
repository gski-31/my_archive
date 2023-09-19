/*
Zibonacci:

This function borrows ideas from the Fibonacci series,
but the calculated results appear to zig and zag, hence
the name. A so-called 'Zibonacci' series would be defined
by the following rules:

    (1): Zib(0) == 1
    (2): Zib(1) == 1
    (3): Zib(2) == 2
    (4): Zib(2n + 1) == Zib(n) + Zib(n - 1) + 1,
            if n > 0 (e.g. odd values 3+)
    (5): Zib(2n) == Zib(n) + Zib(n + 1) + 1,
            if n > 1 (e.g. even values 4+)

Create the Zibonacci(num) function. What is Zib(10)?
What is Zib(100)?

Second: For a given number that might be a Zibonacci
result, find the largest index that maps to that result.
Ex: bestZibNum(3186) == 2467, bestZibNum(3183) == null
*/

function Zib(num) {
    if (num == 0) {
        return 1;
    }
    if (num == 1) {
        return 1;
    }
    if (num == 2) {
        return 2;
    }
    if (num%2 != 0) {
        var n = (num - 1) / 2;
        return Zib(n) + Zib(n - 1) + 1;
    }
    if (num%2 == 0) {
        var n = num / 2;
        return Zib(n) + Zib(n + 1) + 1;
    }
}

console.log(Zib(10));   // 15
console.log(Zib(100));  // 128
console.log(Zib(2467)); // 3186

//: For visualization purposes, console log Zibonacci series
// console.log("");
// console.log("Zib series:");
// for (var idx = 0; idx < 20; idx++) {
//     console.log(Zib(idx));
// }
// console.log("");

//: Second part
function bestZibNum(num) {
    var idx = 0;
    var result = Zib(idx);
    while (result <= num) {
        idx++;
        result = Zib(idx);
        //: This will find the first time the result is achieved
        if (result == num) {
            //: Result will be repeated again, so return the next index
            return idx += 3;
        }
    }
    return null;
}

console.log(bestZibNum(3186));  // 2467
console.log(bestZibNum(2467));  // null
