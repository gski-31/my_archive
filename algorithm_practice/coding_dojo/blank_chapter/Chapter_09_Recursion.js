// Algorithm Challenges
// The Dojo Collection
// Chapter_09_Recursion

//  Recursive Sigma
// Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

//  Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

//  Flood Fill
// Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.

//  Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

//  Recursive “Tribonacci”
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

//  Paging Dr. Ackermann
// The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. It grows rapidly, and hence can overflow the JavaScript stack frame even at very low values. This function accepts two non-negative integer values, num1 and num2, and follows these rules:

// 1) ackermann(0,num2) == num2+1;
// 2) ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
// 3) ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).

// Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!

//  Zibonacci
// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called ‘Zibonacci’ series would be defined by the following rules:

// 1) Zib(0) == 1;
// 2) Zib(1) == 1;
// 3) Zib(2) == 2;
// 4) Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// 5) Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).

// Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?

// Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. bestZibNum(3186) == 2467, bestZibNum(3183) == null.

//  Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false; rBinarySearch([4,5,6,8,12],5) = true.

//  Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// 1) gcf(a,b) == a, if a == b;
// 2) gcf(a,b) == gcf(a-b,b), if a>b;
// 3) gcf(a,b) == gcf(a,b-a), if b>a.

// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should be able to compute rGCF(123456,987654).

//  Tarai
// The tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant. The tarai function accepts three parameters, and is defined as:

// 1) tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
// 2) tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).

// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).

//  String: In-Order Subsets
// Create strSubsets(str). Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).

//  Recursive List Length
// Given first node of a singly linked list, create a recursive function that returns number of nodes in that list. Assume list contains no loops and is short enough that you will not ‘blow your stack’.

//  Got Any Grapes?!?
// Martin loves grapes. He sees a number of baggies containing grapes, all in a row. Stephen tells him that he can take as many of the baggies as he wants, as long as he doesn’t take two that are next to each other. Martin wants to maximize his number of grapes. Grapes are pretty healthy, so let’s help him out. Create a function to accept an array of non-negative integers representing number of grapes in each adjacent baggy. Your function should return the maximum number of grapes he can obtain.

//  Collatz-apalooza
// Define a function that, given positive integer num, returns num/2 if num is even or 3*num + 1 if num is odd. Continuously feeding result back into function results in numerical series such as 5,16,8,4,2,1. According to Dr. Lothar Collatz, the series always reaches 1 (and then repeats 4,2,1,4,2,1,…). What starting number requires the most iterations before reaching 1 the first time?

//  Telephone Words
// Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, return an array of all possible strings that equate to that phone number. For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and “titania”.

//  Rising Squares
// Ever since her dad discovered universal truths about triangles, Sophia Pythagoras has loved square numbers. Given positive integer, successively print squares of integers up to that integer, first ascending odds, then descending evens. Solve recursively with no loops. Ex.: risingSquare(5) returns "1, 9, 25, 16, 4", risingSquare(8) returns "1, 9, 25, 49, 64, 36, 16, 4".

//  Binary String Expansion
// You are given a string containing chars ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ can be substituted. Write a recursive function to return array of all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string functions such as slice(), use them sparingly, as they are expensive.

//  String Anagrams
// Given a string, return array where each element is a string representing a different anagram (a different sequence of the letters in that string). Example: if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"]. For this challenge, you can use built-in string functions such as split().

//  Climbing Stairs
// Speros walks the stairs at the Dojo multiple times every day. Often he takes 2 stairs at a time, to work his quadriceps; he’s just that way. Other days he mixes it up: with every footstep, he randomly chooses to take 1 stair or 2. You are given an integer representing the total number of stairs. Determine all ways to walk the stairs. Given 4, return [[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]]. Solve recursively with no loops. And don’t forget to get yourself some exercise during the bootcamp, as well.

// Second: assuming you always start with a left foot, return only those ways that end with a right step. So, given 4, you should return [[1,1,1,1], [2,2]].

// Third: instead of only returning those that end with a right step, only return those where the total number of steps climbed with left foot equal those climbed with right. So, given 4, you should return [[1,1,1,1], [1,2,1], [2,2]].

//  Sum of Squares
// Mike enjoys teaching the “lego concept” to beginning HTML/CSS students: breaking a web page into different rectangles. There is something about squares that appeals to his sense of balance. Given an integer, calculate and print all combinations of square integers that sum to that integer. No duplicates are allowed among smaller integers. sumOfSquares(10) => “1 + 9”. sumOfSquares(30) => “1 + 4 + 25, 1 + 4 + 9 + 16”. Solve recursively with no loops.

//  All Valid N Pairs of Parens
// Given the number of pairs of parentheses, return an array of strings, where each string represents a different valid way to order those parentheses. Example: given 2, return ["()()", "(())"].

//  Towers of Hanoi
// Create an algorithm to solve the Towers of Hanoi game. In the Towers of Hanoi, there are three poles and a stack of disks that fit onto the poles. The disks range from largest (on bottom) to smallest (on top), currently all on pole A. Moving only one disk at a time, move the stack to pole C. You can use any of the three poles you wish. A larger disk can never be placed on top of a smaller disk. How many moves does it take to relocate six disks from pole A to pole C? What is the first move?

//  IP Addresses
// Given string containing digits, add three decimal points to convert into a valid IP address, and return that string. Each of the four quads in a "###.###.###.###" IP address is a number between 0 and 255. Given "255255255", you could return "2.55.255.255", or "25.5.255.255", or others.

// Second: return an array of all possible valid IP address combinations, for the given string.

//  Uneven Digits
// Cami doesn’t know why, but she’s just in an odd mood today. Let’s make all numerals odd for her. Given an integer, recursively return the integer formed by stripping out all even digits in original. Solve without loops. uneven(-1845) = -15; uneven(79) = 79; uneven(20) = 0; uneven(-92) = -9.

//  Generate All Possible Coin Change
// Create generateAllCoinChange(cents). Given a number of American cents, compute and return an array enumerating all possible ways to represent it, with pennies (1 cent), nickels (5 cents), dimes (10 cents), quarters (25 cents). For 5, return [{dimes:0,nickels:1,pennies:0,quarters:0}, {dimes:0,nickels:0,pennies:5,quarters:0}{}]. Do not return duplicate results.

//  Is Chess Move Safe
// isChessMoveSafe(intendedMove,queen) returns true if square is threatened, else false. It takes a location object for both the square to check, and current location of opposing queen.

// Second: accept an array of queens.

//  Eight Queens
// Build eightQueens() using previous solutions. Return all arrangements of eight queens on an 8x8 chessboard, so no queen threatens any other. How would you best return these results?

// Second: write a helper function that displays the queens-located-on-the-board results returned, in awesomely-retro character graphics, using console.log().

//  All Safe Chess Squares
// Build on your solution to the previous challenge, to create allSafeChessSquares(queen) that returns all chessboard squares not threatened by a given queen.

// Second: accept an array of queens.

//  N Queens
// Create nQueens(n,xSize,ySize) using previous work, returning all arrangements of N unthreatened queens on X by Y rectangular board. eightQueens() == nQueens(8,8,8).

// Second: optimize your solution so that you can extend n, xSize and ySize as far as possible before you exhaust the available memory. Can you get as high as 15 queens on a 15x15 board?

//  Where’s the Bug? (recursion version)
// Without peeking at previous code, how many bugs can you find in the recursive code below?

// function rFib(num)
// {
// if (num <= 1) { return 1; }
// return rFib(num) + rFib(num - 1);
// }
// function rListLength(node) {
// if (!node) {
// return 0;
// }
// else {
// return rListLength(node.next);
// }
// return rListLength(node) + 1;
// }
// function rSigma(num)
// if (num == 0) { return 0; }
// return num + rSigma(num - 1);
// }
// function rFactorial(num) {
// if (num === 0) {return 0; }
// return rFactorial(num + 1) * num;
// }

