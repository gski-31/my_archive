// Algorithm Challenges
// The Dojo Collection
// Chapter_03_Arrays

//  Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

//  Array: Insert At
// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

//  Array: Pop Front
// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

//  Array: Remove At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

//  Array: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

//  Array: Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: solve this without using any nested loops.

//  Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

//  Array: Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

//  Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

//  Array: Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

//  Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

//  Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

//  Array: Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

// Second: don’t use nested loops.

//  Array: Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

//  Array: Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

//  Array: Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

//  Array: Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

//  Credit Card Validation
// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1) Set aside the last digit; do not include it in these calculations (until step 5);

// 2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;

// 3) If any results are larger than 9, subtract 9 from them;

// 4) Add all numbers (not just our odds) together;

// 5) Now add the last digit back in – the sum should be a multiple of 10.

// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.

//  Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

//  Array: Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

//  Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

//  Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

//  Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

//  Short Answer Questions: Arrays
// What is an array?
// What types of values can be held in an array?
// What happens if you try to contain values of different data types in an array?
// What is the index of the first element in an array?
// What is the index of the last element in an array?
// If you control an array, what is the easiest way to determine the number of values?
// When would the above method not work well, and what must you do in that case?
// What are two ways to make an array one element longer?
// What are two ways to make an array two elements shorter?
// What is the upper limit on the number of values an array can hold?
// When working with arrays, does working “in-place” really matter? If so, when and why?
// Which values are “falsy” in JavaScript, and what does “falsy” mean anyway?
// What does “passing by reference” mean?

//  Weekend Challenge: Arrays
// For this weekend challenge, consider the game Tic-Tac-Toe. How would you represent a 3x3 game board: specifically, whether each square is unoccupied or claimed by a player? Could you represent this with an array? What would the array contain? Is there a benefit from having an array of arrays?

// Once you have a good design in mind, create a function that, given one of these gameboards, automatically determines and returns the overall state of the game. A game is always in one of five different states – one state might be “Player 1’s turn”; another might be “Game over: player 2 has won.”

// Once you have mastered that, can you extend this function to handle gameboards of arbitrary size?


