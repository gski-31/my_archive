// Algorithm Challenges
// The Dojo Collection
// Chapter_21_Optimization

// Earlier we discussed what good software looks like. Valid answers were bug-free, resilient to erroneous or malicious inputs, easily deployed and managed in production, compatible in older and diverse environments, diagnosable upon problems, well-documented, escorted by other services, easily localized into world languages, etc. Good software implies dozens of things, but particularly that it is ready for you, and it runs the tasks needed rapidly and efficiently. How can we analyze software performance and tune it, when necessary? The following section applies to software we’ve identified as performance-critical. If it isn’t, then you shouldn’t submit it to this type of scrutiny.

// The Performance Journey

// Software performance can be really difficult to get right. Just as there are many facets of what can slow down a piece of software, there are many avenues that you can pursue to improve it. Probably the most important first step, though, it simply to quantify the existing performance of that code. What are the important Metrics That Matter? Is it a server module, where throughput is king? Is it a client feature, where customers are most likely to value responsiveness? Choose the right metrics, then measure, measure, measure. Measure all the time – when adding new features, changing things, or fixing bugs. There’s no telling when a well-intentioned bug fix will undo an important set of performance tuning.

// Using this performance system, set performance goals. These should be explicit and well-understood before anyone goes off on some crazy performance overhaul. Goals are specific and quantifiable, and once you reach them, you don’t need to (and usually should not) optimize further. Code is often most understandable when first written; any optimization takes us away from that easily-understood state.

// Before starting optimization, compare your goals with your current state. Get a feel for how far away you are. If you need a small improvement, go with more tactical, low-risk, high-confidence tweaks. If you need a big improvement, you’re likely going to need to pull all the levers you can find.

// There are many different altitudes at which you can engage in performance optimization. Design level, algorithm level, code tuning, and more. Design changes are the most disruptive. Naturally, the best time to make a design-level course correction is before (much) code has been written. Don’t be afraid to work on paper to demonstrate that the system really can scale the way your design intends. A back of the envelope sketch to double-check things might save multiple person-years of work down the line.

// Let’s work through three challenges/solutions. Each includes a sequence of small improvements, along with narration to take you through the optimization thought process. You will benefit most if you create fully coded solutions for each step along the way, before referring to the next page.

//  Closest Three-Sum (Series)
// Given an assorted array of numbers, plus a target number, return the three array elements whose sum is closest to target. For example, given ([1,8,5,10,2,4,3],6), return [1,2,3].

//  Closest Three-Sum (Series) – continued
// How did you test your solution? Before optimizing, ensure your code works. Did you try inputs with less than three elements? Do you ensure array elements can only appear once in the result trio? The inputs ([1,4,6,7],3) should return [1,4,6], not [1,1,1]. If you have correctness confidence, continue.

// Next, examine your solution’s performance, and characterize it with Big-O. How much space does it require? What about run-time performance? Did you make unnecessary assumptions? Below we list one possible answer to this challenge. What is your analysis of this solution?

// // Calculate sums, determine which are closest to target, and return them.
// function closestThreeSum1(arr, target) {
// var sums = [];
// for (var idx1 = 0; idx1 < arr.length; idx1++)
// {
// sums[idx1] = [];
// for (var idx2 = 0; idx2 < arr.length; idx2++)
// {
// sums[idx1][idx2] = [];
// for (var idx3 = 0; idx3 < arr.length; idx3++)
// {
// sums[idx1][idx2][idx3] = arr[idx1] + arr[idx2] + arr[idx3];
// }
// }
// }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// for (var idx1 = 0; idx1 < arr.length; idx1++) {
// for (var idx2 = 0; idx2 < arr.length; idx2++) {
// for (var idx3 = 0; idx3 < arr.length; idx3++) {
// if ((target - sums[idx1][idx2][idx3]) < bestSum)
// {
// bestSum = target - sums[idx1][idx2][idx3];
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// }
// }
// }
// }
// return bestNums;
// }

//  Closest Three-Sum (Series) – continued
// We hope you share our opinion that closestThreeSum1 is … unfortunate. It has a number of significant problems. First, it does not actually work because of the absence of two Math.abs() calls. Can you identify where these should be? Also, it is susceptible to crash if sent incorrect inputs. We must fix those before considering any optimization. At that point, what are our performance goals?

// Let’s say our goals are to return a correct answer for 2000-element arrays in 10 milliseconds (ms), and to successfully scale to handle 1,000,000-element arrays in less than an hour. The previous code, after being fixed, fails on both accounts. It returns the answer for 300-element array in 386ms, and it crashes Chrome when trying to handle a 515-element array (solves 514-element array in 1963ms). We’re a long way from those goals! What are the major problems leading to this abysmal outcome? At a glance they might be: memory consumption and (two different sets of) nested loops. Which should we tackle first?

// Memory consumption is often our worst culprit. To quantify its impact, let’s eliminate the second nested set of loops altogether. We could continue to create a large three-dimensional array, but instead of calculating the answer after-the-fact, we could keep track of the best-so-far as we go (there would be little need to create the large array at that point, but stay with me). This only improves performance by about 5%. If we eliminate the array, performance is much better: 65ms for 300 elements, and 300ms for 514 elements! Plus, we scale further: for 2000 elements, we require 17828ms. Code is below:

// function closestThreeSum2(arr, target) {
// if (arr === undefined || target === undefined) { return; }
// if (arr.length === undefined || arr.length < 3) { return; }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// for (var idx1 = 0; idx1 < arr.length; idx1++) {
// for (var idx2 = 0; idx2 < arr.length; idx2++) {
// for (var idx3 = 0; idx3 < arr.length; idx3++) {
// var sum = Math.abs(arr[idx1] + arr[idx2] + arr[idx3] - target);
// if (sum < bestSum) {
// bestSum = sum;
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// }
// }
// }
// }
// return bestNums;
// }

// If our goal is 10ms (not 17000) for a 2000-element array, then we still have work to do!

//  Closest Three-Sum (Series) – continued
// Actually, the solution above is still incorrect. It will put a single array element into the solution multiple times. We need to adjust our FOR loops so that this does not occur. Related, the idx1 outer loop does not need to extend out to arr.length, since idx2 and idx3 will always be after it. Those could be:

// for (var idx1 = 0; idx1 < arr.length - 2; idx1++) {
// for (var idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
// for (var idx3 = idx2 + 1; idx3 < arr.length; idx3++) {

// Also, must we continue if we find a combination that matches our target exactly? No, in that case let’s fast-finish. This would result in our having the following code. What is your assessment now?

// function closestThreeSum4(arr, target) {
// if (arr === undefined || target === undefined) { return; }
// if (arr.length === undefined || arr.length < 3) { return; }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// for (var idx1 = 0; idx1 < arr.length - 2; idx1++) {
// for (var idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
// for (var idx3 = idx2 + 1; idx3 < arr.length; idx3++) {
// var sum = Math.abs(arr[idx1] + arr[idx2] + arr[idx3] - target);
// if (sum < bestSum) {
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// if (sum === 0) { return bestNums; }
// bestSum = sum;
// }
// }
// }
// }
// return bestNums;
// }

// The FOR loop adjustment improves our 2000-element performance to 2.989 seconds (from 17). The fast-return is harder to quantify, but for integer arrays it usually returns in much less than a millisecond (0.008ms in some tests). If the values are not integers, however, our performance is unchanged unless we change (sum === 0) to something like (sum < 0.0001). Let’s say we really do want to find the very best match, so must leave this as-is. We must focus on bringing the 2.989-seconds number down. What about a totally different approach? Think about this before going on to the next page.

//  Closest Three-Sum (Series) – continued
// If we are already operating at O(n3), then there is little harm in sorting the input array (unless this is forbidden by the interviewer). If the array is sorted, does that help?

// If array is sorted, the sum will increase as we progress through each loop. For our innermost loop, once sum exceeds target, we won’t get any closer, so we should break out of that particular inner loop. What performance gain would you expect from this optimization? Are there drawbacks? Code is below:

// function closestThreeSum5s(arr, target) {
// if (arr === undefined || target === undefined) { return; }
// if (arr.length === undefined || arr.length < 3) { return; }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// selectionSort(arr);
// for (var idx1 = 0; idx1 < arr.length - 2; idx1++) {
// for (var idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
// for (var idx3 = idx2 + 1; idx3 < arr.length; idx3++) {
// var sum = arr[idx1] + arr[idx2] + arr[idx3] - target;
// var absSum = Math.abs(sum);
// if (absSum < bestSum) {
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// if (absSum === 0) { return bestNums; }
// bestSum = absSum;
// }
// else {
// if (sum > 0) { break; }
// }
// }
// }
// }
// return bestNums;
// }

// What would you change about the above? At this speed, it would take four years to handle a million-element array – not exactly the speed we want. What about performance on our 2000-element goal?

// Good news and bad news. For floating-point values, we get almost 2x speedup! However, for 2000-integer arrays, performance moves from <0.01ms to 6ms – a 600x slowdown! Not good, right?

//  Closest Three-Sum (Series) – continued
// Don’t be distracted by attempts to lure your focus away from your performance goals. This is still good, assuming our goals remain 1) correctly handle 2000-element arrays in 10ms, and 2) correctly handle 1-million-element arrays in 60 minutes. Nonetheless, it is good to understand the cause of the slowdown. Even if the first three elements yield a fast-finish result, we have a guaranteed cost of sorting the array (6 ms to selectionSort 2000 elements). Substituting quickSort for selectionSort eliminates about 2 ms, giving us 1650 ms for 2000 floats, or 4 ms for 2000 integers. Not bad, but not there yet.

// What else would take advantage of the fact that the array is sorted? Techniques like binary-search can find a value much faster than linear iteration. Could we do that with idx3? The code below uses binary-search to narrow in on an ideal idx3 value, moving on when low and high bookends come together.

// function closestThreeSum6q(arr, target) {
// if (arr === undefined || target === undefined) { return; }
// if (arr.length === undefined || arr.length < 3) { return; }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// quickSort(arr);
// for (var idx1 = 0; idx1 < arr.length - 2; idx1++) {
// for (var idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
// var high = arr.length - 1;
// var low = idx2 + 1;
// while (high >= low) {
// var idx3 = Math.floor((high + low) / 2);
// var candidateSum = arr[idx1] + arr[idx2] + arr[idx3] - target;
// var absDiff = Math.abs(candidateSum);
// if (absDiff < bestSum) {
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// if (absDiff === 0) { return bestNums; }
// bestSum = absDiff;
// }
// if (candidateSum > 0) { high = idx3 - 1; }
// else { low = idx3 + 1; }
// }
// }
// }
// return bestNums;
// }

// Theoretically, this takes us from O(n3) to O(n2logn), which is a 100x win if we have 2000 elements….

//  Closest Three-Sum (Series) – continued
// This makes a big difference! For 2000 floats, we now run in 71ms, which starts to approach our 10ms goal. Integers run in 0.225ms, which is fantastic. Unfortunately, extrapolating to 1 million elements, we still require more than 10 hours to run: we need more perf wins. How about the Math.floor call? Aren’t those expensive? We get a 10% speedup by instead using >>> (closestThreeSum7q, not shown), but that won’t give us an order-of-magnitude improvement. We need a better way to scale up.

// Rather than code tuning, our answer lies in another algorithmic breakthrough. Have idx2 and idx3 count toward each other as follows: start idx2 at idx1+1; start idx3 at arr.length-1. If the three-way sum is too small, move idx2 up by one, otherwise move idx3 down by one. For each idx2, there are very few idx3 values worth considering. This reduces the idx2|idx3 inner loops from O(NlogN) to O(2N) – a big win, and perhaps enough to meet our goals! The code would look like this:

// function closestThreeSum8q(arr, target) {
// if (arr === undefined || target === undefined) { return; }
// if (arr.length === undefined || arr.length < 3) { return; }
// var bestSum = Number.MAX_VALUE;
// var bestNums = [];
// quickSort(arr);
// for (var idx1 = 0; idx1 < arr.length - 2; idx1++) {
// var idx2 = idx1 + 1;
// var idx3 = arr.length - 1;
// while (idx2 < idx3) {
// var candidateSum = arr[idx1] + arr[idx2] + arr[idx3] - target;
// var absDiff = Math.abs(candidateSum);
// if (absDiff < bestSum) {
// bestNums[0] = arr[idx1];
// bestNums[1] = arr[idx2];
// bestNums[2] = arr[idx3];
// if (absDiff === 0) { return bestNums; }
// bestSum = absDiff;
// }
// if (candidateSum > 0) { idx2++; } else { idx3--; }
// }
// }
// return bestNums;
// }

// What do you predict? Could a simple change like this really make a noticeable change?

//  Closest Three-Sum (Series) – continued
// Success! For a 2000-element array of floats, closestThreeSum8q handles them in 5.46ms (down from 62). For integers, our performance is up to 4.3ms, but this is still within range. This actually suggests performance of straight-up O(n2), which suggests that we would handle a million-element array in 1350 seconds, or only 22 minutes. Could this be the case? Yes – in less than 24 minutes, our function returns. From closestThreeSum1 to this one, we sped the 500-element case by 5000x. For closestThreeSum2, a million-element array would take 70 years. The 8q function makes it 5.46ms.

// Bottom line: Algorithm choice is truly crucial when optimizing software. This is particularly the case in your most central, highly-frequented inner-loop code locations. Here, a tiny win can be magnified into significant savings. The Big-O decision does and should overshadow other decisions here. Once you have achieved the right order of magnitude to meet your goals, identifying additional ways to cut your runtime in half can give huge gains even if your Big-O doesn’t change. People will still notice.

// The next challenge explores two axes simultaneously – improving performance, and adding features. Enhancements range from algorithm to data structure to plain old logic. We hope you enjoy the ride.

//  N Queens (Series)
// Recall this challenge from earlier material on recursion. Chessboards are square, with 8 rows of 8 squares each. Queens are one type of chess piece, and in a single move they can travel any number of squares in either of the horizontal directions (along a row), or either of the vertical directions (along a file or column), or either of the diagonal directions (staying on the same color). A piece is considered under threat from a queen if it is situated in a square where that queen can directly move.

//  Is Chess Move Safe
// isChessMoveSafe(intendedMove,queenArr) returns true if square is threatened, else false. Accepts location object to check, and current locations of an array of opposing queens.

//  N Queens
// Create nQueens(numQns,xSize,ySize) using previous work such as isChessMoveSafe, returning all arrangements of N unthreatened queens on X-by-Y rectangular board. eightQueens() == nQueens(8,8,8).

// As with earlier challenges, it behooves you to solve it on your own before moving on to the next page. Refresh your memory by revisiting the Recursion material, if needed.

//  N Queens (Series) – continued
// Again, it benefits you most if you have already created a solution before reading on. If not, do so now. Did the previous performance journey change how you viewed this one? For this challenge, we start with a most ridiculous implementation. Do your best to spot the fix or optimization before we get to it!

// function isChessMoveSafe1(intendedMove, queenArr) {
// var xCoord = 0, yCoord = 1;
// var safe = true;
// for (var qNum = 0; qNum < queenArr.length; qNum++) {
// for (var row = 0; row < 8; row++) {
// if ((intendedMove[xCoord] == row)
// && (intendedMove[yCoord] == queenArr[qNum][yCoord])) { safe=false;}
// }
// for (var col = 0; col < 8; col++) {
// if ((intendedMove[xCoord] == queenArr[qNum][xCoord])
// && (intendedMove[yCoord] == col)) { safe = false; }
// }
// for (var lDiag = -7; lDiag <= 7; lDiag++) {
// if (( intendedMove[xCoord] - intendedMove[yCoord] == lDiag)
// && (queenArr[qNum][xCoord] - queenArr[qNum][yCoord] == lDiag))
// { safe = false; }
// }
// for (var rDiag = 0; rDiag <= 14; rDiag++) {
// if (( intendedMove[xCoord] + intendedMove[yCoord] == rDiag)
// && (queenArr[qNum][xCoord] + queenArr[qNum][yCoord] == rDiag))
// { safe = false; }
// }
// }
// return safe;
// }
// function queens1(nQueensLeft,results,queensSoFar) {
// if (results === undefined) { results = []; }
// if (queensSoFar === undefined) { queensSoFar = []; }
// if (nQueensLeft) {
// for (var row = 0; row < 8; row++) {
// for (var col = 0; col < 8; col++) {
// if (isChessMoveSafe1([row, col], queensSoFar)) {
// var newQueen = [row,col];
// queens1(nQueensLeft-1,results,queensSoFar.concat([newQueen]));
// }
// }
// }
// } else { results.push(queensSoFar); }
// }

//  N Queens (Series) – continued
// First, we’re sorry about the previous page’s code. It is a bit below Dojo standards, in performance but also in correctness. Perhaps you spot the bugs already, but first let’s talk about what this code is trying to do. This is a typical recursive approach for the Eight Queens problem. To identify a location, we use a two-element array. Using a technique known as dynamic programming, the queens1 function calls itself, building up an array of queens in safe locations. When all the required queens are placed, it adds the queensSoFar array to the final results array, and then it backtraces in order to continue.

// Good idea, but unfortunately the code is dreadful. To determine all the ways of placing just 5 queens on an 8x8 board, it took more than 30 seconds – and it returned the wrong answer (do you see why?). There are duplicates in the results returned, because regardless of where we may have put the previous queen, we always start at the top row when suggesting the next set of safe squares. This may be the right thing if we are creating an allSafeChessSquares function, but here we don’t want that. So, our first change will be to address a defect: once we put down a queen, don’t allow subsequent queens to be placed on earlier rows.

// The following code at least functions correctly:

// function queens2(nQueensLeft,results,queensSoFar) {
// if (results === undefined) { results = []; }
// if (queensSoFar === undefined) { queensSoFar = []; }
// if (nQueensLeft) {
// var row = 0;
// if (queensSoFar.length) {
// row = queensSoFar[queensSoFar.length - 1][0];
// }
// for ( ; row < 8; row++) {
// for (var col = 0; col < 8; col++) {
// if (isChessMoveSafe1([row, col], queensSoFar)) {
// queens2(nQueensLeft-1,
// results,
// queensSoFar.concat([[row,col]])
// );
// }
// }
// }
// }
// else { results.push(queensSoFar); }
// }

// What else is hiding in here that we should address? Let’s measure performance. How do you think this version will compare to the previous one? The previous one took about 30 seconds to find ways to place 5 queens on an 8x8 board.

//  N Queens (Series) – continued
// The new version queens2 only took 310 milliseconds (ms) to correctly return the 46736 possible ways of placing 5 queens on an 8x8 board. Now that we have code that actually runs correctly, let’s crank it all the way up to 8 queens. The queens2 version, when run with 8 queens on an 8x8 board, requires 720 milliseconds to return the correct 92 solutions. By the way, you may be wondering how we make these timing measurements. Our initial profiling code looks like the following:

// function timeQueens1(num) {
// var start, end;
// var results = [];
// start = Date.now();
// results = queens1(num); // or queens2, etc.
// end = Date.now();
// console.log("Found %d solns in %f millisec", results.length, end-start);
// }

// So, how about that queens2 function? It runs a lot faster, yes? It does, but not fast enough. There are a couple of things that leap out; let’s handle them. One, we “check for undefined” in every recursive call. Let’s move that out of our main recursion path into a wrapper function. Two, when adding a queen to our queensSoFar collection, we don’t resume on the next row, we resume on the same row. Those squares will never be fruitful, so it’s wasted time. If you haven’t seen FOR loops with blank initialization sections, those are legal, if uncommon. Also, the double-[ within queensSoFar.concat is intentional. Without them, concat will think we want to append those two elements to queensSoFar, instead of appending the array itself. After making those fixes, let’s try the following updated queens3:

// function queens3(nQueensLeft,results,queensSoFar) {
// if (nQueensLeft) {
// var row = 0;
// if (queensSoFar.length) {
// row = queensSoFar[queensSoFar.length - 1][0] + 1;
// }
// for ( ; row < 8; row++) {
// for (var col = 0; col < 8; col++) {
// if (isChessMoveSafe1([row, col], queensSoFar)) {
// queens3(nQueensLeft - 1, results,
// queensSoFar.concat([[row,col]]));
// }
// }
// }
// } else { results.push(queensSoFar); }
// }

// What do you predict? Remember, the previous version correctly ran 8 queens in 720 ms.

//  N Queens (Series) – continued
// Queens3 is our best attempt so far, without question. It correctly runs 8 queens in 262 milliseconds! Something is still rotten in the state of our code, however. Earlier on, did you happen to raise an eyebrow at our isChessMoveSafe function? Honestly, it’s about as inefficient as possible.

// Here’s a much-improved final version of isChessMoveSafe:

// function isChessMoveSafe(intendedMove, queenArr) {
// if ( !(intendedMove instanceof Array)
// || !(queenArr instanceof Array)) { return false; }
// for (var qNum = 0; qNum < queenArr.length; qNum++) {
// if ( intendedMove[0]==queenArr[qNum][0]
// || intendedMove[1]==queenArr[qNum][1]
// || intendedMove[0]+intendedMove[1]==queenArr[qNum][0]+queenArr[qNum][1]
// || intendedMove[0]-intendedMove[1]==queenArr[qNum][0]-queenArr[qNum][1]
// )
// { return false; }
// }
// return true;
// }

// Oh my, much better. Instead of 168 array reads, this has 12. Previously 62 compares, now is 4. Our 30 adds and 30 subtracts became 2 adds and 2 subtracts. Best of all, we have a fast-fail: the numbers cited are worst-case. This function is called constantly. We should expect significant speedup, yes?

// Our queens4 function is essentially unchanged, other than calling the above improved subroutine:

// function queens4(nQueensLeft,results,queensSoFar) {
// if (nQueensLeft) {
// var row = 0;
// if (queensSoFar.length)
// { row = queensSoFar[queensSoFar.length - 1][0] + 1; }
// for ( ; row < 8; row++) {
// for (var col = 0; col < 8; col++) {
// if (isChessMoveSafe([row, col], queensSoFar)) {
// queens4(nQueensLeft-1,results,queensSoFar.concat([[row,col]]))
// }
// }
// }
// } else { results.push(queensSoFar); }
// }

// What next? Will our performance improve? Have we introduced bugs?

//  N Queens (Series) – continued
// So far so good with our performance journey. The queens4 function (powered by isChessMoveSafe) runs in 62 millisec, a major (12x) improvement from our initial 720 ms version (and that doesn’t count our original version that ran in 30 secs and didn’t even work right). Where do we go from here – are we done? No! The original challenge asked us to extended our code out as far as we could, to faster times and larger boards. If we don’t yet see how to tune this code further, then we can at least extend it from hard-coded 8-by-8 dimensions to arbitrary X-by-Y dimensions. As we get faster, the larger boards can be a better barometer for measuring our progress. Let’s refactor queens to handle any board size:

// function queens5(nQueensLeft, xSize, ySize, results, queensSoFar)
// {
// if (nQueensLeft) {
// var row = 0;
// if (queensSoFar.length) {
// row = queensSoFar[queensSoFar.length - 1][0] + 1;
// }
// for ( ; row < ySize; row++) {
// for (var col = 0; col < xSize; col++) {
// if (isChessMoveSafe([row, col], queensSoFar)) {
// queens5( nQueensLeft - 1, xSize, ySize, results,
// queensSoFar.concat([[row,col]]));
// }
// }
// }
// }
// else { results.push(queensSoFar); }
// }

// One additional thing. We will start using performance.now() instead of Date.now() in our timings. The Date object is useful, but the newer performance object is intended for exactly this sort of high-precision timing, and at this point it is available on all important browser versions. So, now if we measure performance, will we see a big win? What is our expected result?

//  N Queens (Series) – continued
// As expected, performance is unchanged between queens4 and queens5 – we only extended our game board to arbitrary sizes. However, now we can measure larger boards. 8x8: 56ms; 9x9: 402ms; 10x10: 3362ms; 11x11: 30383ms. As you profile your code, you may see ups and downs. Shut down programs to clear memory, making your test environment slightly more consistent. In the end, though, these readings will always have variability. A time-honored convention is to take multiple readings (perhaps 5), throw out the best and worst, and average the rest. The timings below do exactly that.

// Now what? It would be good to retrieve a set of next safe squares, instead of continually asking about each different square – essentially, allSafeChessSquares. My first version, nextChessSquares1 (not included), did not include our earlier bug fix, so after placing queens in lower rows, it subsequently offered first-row queens. Oops! While there, I added error checking to our wrapper function, in case someone asks for 10 queens on a 9x9 board, etc. Here are latest fixed versions of everything involved:

// function nextChessSquares2(queenArr, x, y) {
// var safeSquares = [];
// var row = (queenArr.length) ? queenArr[queenArr.length - 1][0] + 1 : 0;
// for ( ; row < y; row++) {
// for (var col = 0; col < x; col++) {
// if (isChessMoveSafe([row,col], queenArr))
// { safeSquares.push([row,col]); }
// }
// }
// return safeSquares;
// }
// function queens6(nQueensLeft, x, y, results, queensSoFar) {
// if (nQueensLeft) {
// var candidates = nextChessSquares2(queensSoFar, x, y);
// for (var candNum = 0; candNum < candidates.length; candNum++) {
// queens6( nQueensLeft - 1, x, y, results
// queensSoFar.concat([candidates[candNum]]));
// }
// } else { results.push(queensSoFar); }
// }
// function nQueens2(num, x, y) {
// var results = [];
// if (num <= x && num <= y) { queens6(num, x, y, results, []); }
// return results;
// }

// Queens6 looks good, but nextChessSquares2 and nQueens2 are nothing new. Let’s measure.

//  N Queens (Series) – continued
// The measurements for queens6 are the same as those for queens5. Remember that we created nextChessSquares function to streamline the process of identifying candidates for the next queen? Within it, we just used the standard isChessMoveSafe, which is why performance has not yet improved. We can optimize the checking of a square further, and that should help a lot, since this is done continuously. First, we eliminate the function call by putting isChessMoveSafe code inline – into our nextChessSquares function itself. That by itself may not do a lot, but we can further eliminate one of the four checks as well: remember, we don’t have to do a row check any longer, since we will always start exploring on the row following the previous queen. That is, all queens are placed in successive rows on our board. With that, here is the tuned-up nextChessSquares function:

// function nextChessSquares3(queenArr, x, y) {
// var safeSquares = [];
// var row = (queenArr.length) ? queenArr[queenArr.length - 1][0] + 1 : 0;
// for ( ; row < y; row++) {
// for (var col = 0; col < x; col++) {
// for (var qNum = 0; qNum < queenArr.length; qNum++) {
// var qY = queenArr[qNum][0];
// var qX = queenArr[qNum][1];
// if ( qX == col
// || qX - qY == col – row
// || qX + qY == col + row)
// { break; }
// }
// if (qNum == queenArr.length) { safeSquares.push([row,col]); }
// }
// }
// return safeSquares;
// }
// Any predictions? This will be faster, presumably, but will it be a big win?

//  N Queens (Series) – continued
// Well, the gain is measurable, but it isn’t a big win – maybe 5% better (which is never bad). Our timings are as follows: 52.8ms for 8x8, 378.7 ms for 9x9, 3159 ms for 10x10, and 29234 ms for 11x11. At this point we need a new approach. What about memory usage? Generally smaller is faster. Can we make things smaller? There are no obvious ways that jump out at us, on that. Well, what things are taking up memory? Our location arrays take up space. Also, our candidate location chains are coming and going all the time. Even if our memory needs stay constant, we could always try to reduce ongoing memory churn. Memory operators can be expensive, particularly in problems like this with big backtrace results.

// The change seems like a reasonable one, because we do see the candidates array constantly growing and shrinking, as recursion/backtracing happens. We should not continually deallocate and reallocate that array; let’s keep it more stable. If we want to push and pop it, that means we can’t add it ‘live’ to the results array, though. We’ll need to make a shallow copy each time we add a new final result. That is a very good tradeoff, since we push/pop candidates constantly, and only occasionally add a new final result solution.

// function queens8(nQueensLeft, x, y, results, queensSoFar) {
// if (nQueensLeft) {
// var candidates = nextChessSquares3(queensSoFar, x, y);
// for (var candNum = 0; candNum < candidates.length; candNum++)
// queensSoFar.push(candidates[candNum]);
// queensTest(nQueensLeft - 1, x, y, results, queensSoFar);
// queensSoFar.pop();
// }
// }
// else {
// results.push(Array.from(queensSoFar));
// }
// }

// One additional note: I just read a post talking about the fastest way to make a copy of an array. I expected that Array.from would be the winner. Actually, it isn’t – doing it by hand is much better! So, we’ll change the one-liner (commented out below) to this chunk of code instead:

// // results.push(Array.from(queensSoFar));

// var result = [];
// for (var idx = 0; idx < queensSoFar.length; idx++) {
// result[idx] = queensSoFar[idx];
// }
// results.push(result);

// Let’s do a check-in on performance to see how far we’ve come.

//  N Queens (Series) – continued
// Our eliminate memory churn fixes worked brilliantly. Our timings have experienced the first significant downtick in a while. We measure 14.4ms for 8x8, 98.1 ms for 9x9, 825 ms for 10x10, and 7387 ms for 11x11. This is almost a 4x improvement, which is massive! Also, measuring separately, doing an array copy by hand is much faster than using a built-in. This saved us an entire second, on the 11x11.

// Where now? Are we empty of ideas – is this as good as it gets? Believe it or not, there are three more queens improvements out there to show us additional tuning!

// You know how we significantly reduced our time, by making sure to start exploring next queen locations after previous one? That eliminated lots of dead ends (and false duplicates). What about the flip side? It would not make sense, for example, to place a queen on the last row if we still have two queens to place after it! So, just as we can constrain the starting row for each candidate queen, we can also constrain the ending row. If we have three queens remaining, then we can’t put one of them any lower than the third-to-last row (it can’t go in the second-to-last row, because then where would the subsequent queens be placed? Again, every successive queen must move forward to a next row).

// Here’s the code. Can it really make a difference?

// function queens9(nQueensLeft, x, y, results, queensSoFar) {
// if (nQueensLeft) {
// var candidates = nextChessSquares3(queensSoFar, x, y –nQueensLeft +1);
// for (var candNum = 0; candNum < candidates.length; candNum++) {
// queensSoFar.push(candidates[candNum]);
// queens9(nQueensLeft - 1, x, y, results, queensSoFar);
// queensSoFar.pop();
// }
// }

// else {

// var result = [];

// for (var idx = 0; idx < queensSoFar.length; idx++) {

// result[idx] = queensSoFar[idx];

// }

// results.push(result);

// }

// }



// Let’s see if this helps. At this point, unless it makes the code really confusing we want the improvement – we will take all the performance and scale-up wins we can get.





// Chapter 21 – Optimization



//  N Queens (Series) – continued

// Are you kidding? This optimization’s huge: 0.67ms for 8x8, 2.26ms for 9x9, 10.5ms for 10x10, 45.3ms for 11x11. How about larger? 254ms for 12x12, 1434ms for 13x13 and 8838ms for 14x14. Nice!



// 15x15 takes a very long time, then crashes. Why? Our code now generates lots of data, quickly. We don’t waste time looking at unfruitful squares. We are hitting memory limits. Let’s address that. It may make our code less readable, but if you made it this far, you deserve the end of the story!



// Let’s compress our location data: that huge array of final results and queensSoFar fragments. Even a small fix might get us to 15x15. Let’s bit-encode the X and Y coordinates into a number (not an array). We’ll encode/decode when we write/read them (readability--, but performance might be worth it):



// function nextChessSquares4(queenArr, x, y) {

// var safeSquares = [];

// var row = (queenArr.length) ? ((queenArr[queenArr.length-1] >>8) +1) : 0;

// for ( ; row < y; row++) {

// for (var col = 0; col < x; col++) {

// for (var qNum = 0; qNum < queenArr.length; qNum++) {

// var qY = queenArr[qNum] >> 8;

// var qX = queenArr[qNum] & 0x0ff;

// if (qX == col || qX-qY == col-row || qX+qY == col+row)

// { break; }

// }

// if (qNum == queenArr.length) { safeSquares.push((row << 8) + col); }

// }

// }

// return safeSquares;

// }

// function queens10(nQueensLeft, x, y, results, queensSoFar) {

// if (nQueensLeft) {

// var candidates = nextChessSquares4(queensSoFar, x, y –nQueensLeft +1);

// for (var candNum = 0; candNum < candidates.length; candNum++) {

// queensSoFar.push(candidates[candNum]);

// queens10(nQueensLeft - 1, x, y, results, queensSoFar);

// queensSoFar.pop();

// }

// }

// else {

// var result = [];

// for (var idx = 0; idx < queensSoFar.length; idx++)

// { result[idx] = queensSoFar[idx]; }

// results.push(result);

// }

// }





// Chapter 21 – Optimization



//  N Queens (Series) – continued

// This optimization is nice as well: 20-30%! Also, as expected it reduces our memory usage (that’s why it runs faster), allowing us to reach 15x15, in 41 seconds! Congratulations. Here are timings: 0.53ms for 8x8, 1.35ms for 9x9, 6.62ms for 10x10, 32.5ms for 11x11, 169ms for 12x12, 1019ms for 13x13, 6320ms for 14x14, and 41329ms for 15x15. Yes, at 16x16 we crash, but this is still a huge success.



// We have one last trick up our sleeve. Has it already occurred to you? Every arrangement can be mirrored from left-to-right. So, how about if we try only the first-queen possibilities of the left side, and then just “reflect” (quick copy) all the complete results to the other side as well! Basically, this just means we take a complete result and reflect the X coordinate across the board’s midline. On an 8x8 board, column 0 would become column 7. Column 4 would become 3. Look at the code for more.



// function nextChessSquares5(queenArr, x, y) {

// var safeSquares = [];

// var row =(queenArr.length) ? ((queenArr[queenArr.length - 1] >>8) +1) :0;

// for ( ; row < y; row++) {

// var highestCol = (row == 0) ? x/2 : x;

// for (var col = 0; col < highestCol; col++) {

// for (var qNum = 0; qNum < queenArr.length; qNum++) {

// var qY = queenArr[qNum] >> 8;

// var qX = queenArr[qNum] & 0x0ff;

// if (qX == col || qX - qY == col - row || qX + qY == col + row)

// { break; }

// }

// if (qNum == queenArr.length) { safeSquares.push((row << 8) + col); }

// }

// }

// return safeSquares;

// }



// This is one side of it. Let’s also look at the queens11 function that consumes it.





// Chapter 21 – Optimization



//  N Queens (Series) – continued



// function queens11(nQueensLeft, x, y, results, queensSoFar) {

// if (nQueensLeft) {

// var candidates = nextChessSquares5(queensSoFar,x,y-nQueensLeft+1);

// for (var candNum = 0; candNum < candidates.length; candNum++) {

// queensSoFar.push(candidates[candNum]);

// queens11(nQueensLeft - 1, x, y, results, queensSoFar);

// queensSoFar.pop();

// }

// }

// else {

// var result = [];

// var result2 = [];

// for (var idx = 0; idx < queensSoFar.length; idx++) {

// result[idx] = queensSoFar[idx];

// var xCoord = queensSoFar[idx] & 0x0ff;

// xCoord = (x - 1 - xCoord);

// result2[idx] = queensSoFar[idx] & (~0x0ff) | xCoord;

// }

// results.push(result);

// if (queensSoFar[0] < (x - 1)/2) { results.push(result2); }

// }

// }



// Bottom line: this halves our runtime yet again. We’ve successfully taken initial measurements down by 1500x or more. Here are final timings: 0.214ms for 8x8, 0.83ms for 9x9, 3.44ms for 10x10, 20.2ms for 11x11, 93.5ms for 12x12, 582ms for 13x13, 3283ms for 14x14, and 23459ms for 15x15.



// There you have it, a play-by-play performance journey that took initially dysfunctional code and, after fixing it, improved performance by (depending on the size of the board) a factor of 20,000x. Not bad!





// Chapter 21 – Optimization





// Code Tuning


// You’ve chosen a good design; your algorithm choice is sound; you are keeping all the different pipes (network, storage, memory, CPU, power) fully-utilized and at approximately equal levels; you’ve applied all the appropriate compiler optimization and server configuration settings; somehow it isn’t enough to give your software the performance it needs. What now?



// Code tuning is becoming a bit of a lost art, except in larger products where all the obvious levers have already been pulled. In the old days, grey-bearded gurus would hand-code assembly-language inner-loop routines because compilers were not yet as good as a human could be. This is no longer the case, but you can still make a major difference in performance with some important choices in how you code something. Pay attention to what functions you use and how much data you have. Is your data space growing fast? Large-but-relatively-unchanging is better than almost-as-large-but-highly-variable. In these cases, rewriting a chunk of code might make a noticeable difference. When data sets get large, the software maxim of “smaller is faster” really sets in. In these cases, you need to pay special attention to your data structure choice. Algorithms (“work smarter”) can save CPU and battery, whereas data structures (“work smaller”) help with everything else: RAM, storage, network, etc. When you are running out of RAM, you’ll do almost anything to generate more (or consume less!). Stay tuned….



// The next journey is largely algorithmic, based on a question from the earliest chapters. Have fun!



//  Is Number Prime (Series)

// Given number, return whether it is prime. Prime numbers are only evenly divisible by themselves and 1.



// Before moving on, quickly write a naïve isNumberPrime, and then optimize it.



// OK, hopefully you’ve spent good quality time with pencil, paper, marker, whiteboard. From our side, here is a naïve implementation we came up with on very short order. No guarantees!



// What do you see? Is it a starting point?



//  Counting Primes

// Build on the isNumberPrime(num) function at left to count the primes that are equal or less than given integer.



// Second: add the ability to profile this function, measuring progress as we optimize isNumberPrime.



// function isPrime(num) {

// for(var count=1; count<=num; count++) {

// if (num/count == parseInt(num/count))

// { return false; }

// }

// return true;

// }





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// For the record: no, the previous source is a piece, but not a piece of code. It doesn’t work; it considers nothing prime (some people are just impossible to please). Fixing it, now we have the following. This should be much better, but again, no guarantees!



// function isPrime0(num)

// { // start at 2 not 1

// for (var count = 2; count < num; count++) { // < num, not <= num

// if (num / count == parseInt(num / count)) {

// return false;

// }

// }

// return true;

// }



// Hopefully isPrime0 will work as a starting point. Also, below is some code to quantify our improvements. Using a function pointer enables me to quickly measure new routines.



// function countPrimesUpTo(limit, primeFn)

// {

// var count = 0;

// var start = performance.now();



// for (var num = 0; num <= limit; num++) {

// if (primeFn(num)) {

// count++;

// }

// }

// var end = performance.now();

// return "The function " + primeFn.name + "()"

// + " found " + count + " primes"

// + " in " + (end - start) + " msec.";

// }



// countPrimesUpTo(1000000,isPrime0); // Here’s how we’ll use the profiler.



// What do you think about this implementation? How similar is it to yours? What might you expect the run-time performance to be, if we counted primes up to 1 million? Because the larger the number, the greater number of possible divisors we must check, the complexity of this function as num grows is O(n2). The fact that we count all of them compounds the problem, so we should expect O(n3) behavior.



// On this machine, isPrime0 returned that there are 78500 primes under 1 Million, and it did so in 501.5 seconds. That will be our baseline. Do you note anything about isPrime0? Does it do all that it should? Specifically, where’s the bug?





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// The isPrime0 function is fine – unless you expect it to return correct answers for all inputs. (-:



// Specifically, now we are considering too many numbers to be prime. (That kind of degrades the whole prime label, if you get what I mean. We need that club to be more exclusive.) Negative numbers cannot be prime. Fractional numbers are not prime. Also, the numbers 0 and 1 are by definition not prime. So, as it turns out, we cannot consider isPrime0 our baseline; we are still on the hunt for a function that returns correct outputs. Let’s fix it and see how far we get. Here’s isPrime1 (of many, to be sure):



// // Fixes bugs: num = 1, 0, negatives, non-integers

// function isPrime1(num)

// {

// if (num < 2 || num != parseInt(num)) { return false; }



// for (var count = 2; count < num; count++) {

// if (num / count == parseInt(num / count)) {

// return false;

// }

// }

// return true;

// }



// Unlike isPrime0, this one is correct. Non-integers, or anything below 2 is considered non-prime. Counting primes to 1 Million, it returned 78498 primes (correct!) in 476.3 seconds. We have a baseline! Sadly, for our behavior, counting primes to 100 Million would take 100*100*100 longer: 15 yrs.



// How can we make it faster? It is already fairly basic; it only calls parseInt – actually a good target. ParseInt exists to convert various inputs to integers – floats but also strings or even arrays. If expect only floats, we can use a less expensive function. Instead of parseInt, let’s try using Math.floor.



// // Uses Math.floor() instead of parseInt().

// function isPrime2(num)

// {

// if (num < 2 || num != Math.floor(num)) { return false; }



// for (var count = 2; count < num; count++) {

// if (num / count == Math.floor(num / count)) {

// return false;

// }

// }

// return true;

// }





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// Before we go further, it is important to set our performance goals. Don’t go optimizing unless you have some sort of goal in mind. Here it is: 1) we want to count the primes up to 100 Million, in 60 seconds; 2) we also want to be able to count primes up to 1 Billion but we’re not sure how long that should take.



// So how did isPrime2 fare when measured? A lot better than isPrime1! Specifically counting primes to 1 Million took 147.7 seconds, which is an improvement of more than 3x over previous baseline. Nice! Now what? Would it be possible to eliminate the function call altogether? What do you recommend?



// As it turns out, there is an even less expensive way to check whether something is an integer. Do you remember the modulus operator %? Consider what num might be after executing num = num % 1. Basically, it returns the less-than-one fractional component of the number. Certainly, any primitive operator (such as + - * / % & | ^ ~) will be much faster than any function call.



// Let’s make this quick change and measure the improvement.



// // Uses % instead of Math.floor().

// function isPrime3(num)

// {

// if (num < 2 || num % 1) { return false; }



// for (var count = 2; count < num; count++) {

// if (num % count == 0) {

// return false;

// }

// }

// return true;

// }



// What improvement do you expect? In a way, it depends on how bad you think Math.floor is…. The function isPrime3 completes counting 1 million primes in 111.1 seconds. That’s a nice 25% cut. As before, you will see plenty of variability in your own measurements, and a good practice is to create as stable and reproducible an environment as you can, make 5 or 7 measurements, throw out the best and worst measurements, and average the rest. This is what I did for this chapter’s measurements.



// That seems like as much as we can squeeze out of the actual math operation. What else is there? Well, let’s think through all the values of count that we are dividing against num. The values are 2, 3, 4, 5, 6, … wait a minute! 4 and 6 aren’t going to matter. The value 2 is the only even one we really care about. We can eliminate all the rest of the even numbers from our FOR loop! We should expect this to cut our run-time basically in half. On the next page is the updated code, and following that we mention how it impacted the performance. What do you expect?





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// Here is updated code. Note how we immediately exit on special cases – the very definition of fail-fast.



// // Only check odd factors (after checking 2).

// function isPrime4(num)

// {

// if (num % 2 == 0 && num > 2) { return false; }

// if (num < 2 || num % 1) { return false; }



// for (var count = 3; count < num; count += 2) {

// if (num % count == 0) {

// return false;

// }

// }

// return true;

// }



// The isPrime4 function counts 1 Million primes in 60.7 seconds: not quite a 2x speedup, but close. So far we have a 7.5x acceleration from our isPrime1 baseline of 476 seconds. This is good, but what else can we do to reduce the number of unnecessary divisors?



// Think about various prime factors of a compound number. How large could these prime factors be? Prime factors, when multiplied by other prime factors, equal a compound number. A number like 36 has (multiple) prime factors of 2 and 3. We would immediately discover this number is not prime, upon checking 2, but that doesn’t help us understand how far toward a number we need to check divisors, before having confidence that the number is prime (what if our 36 were 37 instead?). Perhaps we need to check factors up to a specific fraction of the given number?



// Maybe a different example. To think more clearly about this first-prime-to-number ratio, let’s pick a number with only two prime factors. How about 65 – prime factors are 5 and 13. When we get to the 5, we again have discovered that it is not prime. A little better, but again we haven’t learned anything – it’s not as if we will always hit all the primes for a number once we get to 10% of the number. There are numbers smaller than 65 that have first-primes bigger than 5, it seems. What are they? Well, if we want the first-prime to be larger, then we need the second-prime to be smaller. How about trying numbers with prime factors really close together – a square: 49. Squares give us first-prime factors that are as far from zero as possible (if they were any bigger, they would exceed the second-prime).



// This guides our next optimization! Just as we try only odd divisors (after trying 2), we also need to try divisors only as high as the number’s square root. For 97, we need not try prime factors higher than 9.



// But will this make a real difference in performance? What would a good implementation be?





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// Here’s an implementation of isPrime5 that tries divisors up to the number’s square-root.



// // Only check factors up to sqrt(num).

// function isPrime5(num)

// {

// if (num % 2 == 0 && num > 2) { return false; }

// if (num < 2 || num % 1) { return false; }



// for (var count = 3; count <= Math.sqrt(num); count += 2) {

// if (num % count == 0) { return false; }

// }

// return true;

// }



// How is performance? Fabulous! To count primes under 1 million, isPrime5 uses 130.4 millisecs (ms)! Compared to isPrime4, it’s a 500x speedup for that benchmark. Also, it means we can count higher. How about 50 million instead of 1 million? This successfully runs and completes in 30.7 seconds.



// Gee, how do we get much better than that? Maybe we don’t. Something important to note here is that you should always have reasonable performance goals in mind before you start optimizations. Then stop optimizing when you reach them. Without these goals, how will you ever know when you should be done with it? (I realize some of you may feel I should be done with this journey, but I’ll continue.)



// If, like us, you are a purist and want to profile your code using single-pass measurements with just a single large value, we can help. Here is a set of progressively larger prime numbers, as well as a set of roughly correlated compound numbers that require significant calculation to prove as non-prime:



// var bigPrimes = [ 99991, 999983, 9999991,

// 99999989, 999999937, 9999999967,

// 99999999977, 999999999989, 9999999999971,

// 99999999999973, 999999999999989, 9007199254740881 ];



// var bigCompounds = [ 99221, 995779, 9922331,

// 99799811, 999634589, 9999399973,

// 99999515333, 999966000289, 9999919930081,

// 99999919999487, 999998950017311, 9007197807561043 ];



// What is our next step? Maybe we can unroll our inner loop a little, to skip a few more obvious values – not unlike what we are doing when we count += 2 each time (skipping the even values). Could we do that for multiples of three as well? Maybe, but would that make a noticeable difference?





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// Turns out it does help, considerably. Compared to isPrime5, our new function isPrime5a executes in about 2/3 the time. From the changes we made to our inner loop, this makes sense.



// function isPrime5a(num)

// {

// if (num % 2 == 0 && num > 2) { return false; }

// if (num % 3 == 0 && num > 3) { return false; }

// if (num < 2 || num % 1) { return false; }



// for (var count = 5; count <= Math.sqrt(num); count += 4) {

// if (num % count == 0) { return false; }

// count += 2;

// if (num % count == 0) { return false; }

// }

// return true;

// }



// So now we are counting primes to 1 million in about 84.1 millisecs, and to 100 Million in about 46 secs. This is great – we are passing our first performance goal!



// Side note: a single run of isPrime5a(9007199254740881) – our biggest prime – completes in 270ms. Our baseline isPrime1 scales linearly, needing 2.5 minutes for 9999999967 (1,000,000x faster). We can extrapolate what isPrime1 needs for 9007199254740881: a whopping 4.4 years!



// Let’s say that the business team identified an exciting new opportunity for our product if we can optimize it even more than before. Our performance goals are now threefold:

// 1) Count primes to 100 Million in 60 seconds, first time (with ‘cold cache’),

// 2) Count primes to 1 Billion on standard laptop without crashing, and

// 3) (new) Count primes to 100 Million in 1 second thereafter (with ‘warm cache’).

// These are very aggressive goals – remember when we were counting primes to 1 Million in 476 secs?



// Our isPrime5a function has been good to us so far. Let’s set it loose counting primes toward 1 Billion, shall we? Good news: after 17 minutes or so, it eventually gets to 1 Billion without error. So, we’ve met our new performance goal #2 as well!



// Goal #3 is going to be tough. What is a reasonable step toward that goal? We already calculate primes quickly; the only way faster would be to not calculate at all … ah! Perhaps we won’t calculate: we’ll remember them. Yes, a caching strategy. Just as we did earlier with Fancy Fibonacci, let’s save previous results when asked if a number is prime.



// The next page should have a reasonable implementation of our caching scheme, but before you turn to it, create this yourself. It’s for your own good, you know.





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// We are now up to isPrime6 – and if this one doesn’t speed things up, then we don’t know what will. What are the issues, if any, with this implementation?



// // Cache previous results.

// var prevResults = [false, false, true];

// function isPrime6(num)

// {

// if (num < 0 || num % 1) { return false; }



// if (prevResults[num] === undefined) {

// if (num % 2 == 0) { prevResults[num] = false; }

// else {

// for (var count = 3; count <= Math.sqrt(num); count += 2) {

// if (num % count == 0) {

// prevResults[num] = false;

// break;

// }

// }

// if (count > Math.sqrt(num)) { prevResults[num] = true; }

// }

// }

// return prevResults[num];

// }



// Looks like this version will be a real memory hog, that’s the main issue. As a result, though, it should work really well for subsequent requests. In fact, this is exactly the case. It counts primes under 1 Million in 0.189 seconds! Furthermore, it counts primes to 100 million with cold cache in less than 90 seconds, and second time in just 0.653 seconds! So, we have now met performance goal #3. We still need to get the “cold cache” version down to 60 second for 100 Million. While we’re here let’s see whether isPrime6 can scale to 1 Billion.



// Unfortunately, we don’t get there. At something like 117 million, we run out of memory and crash (with the “Aw, Snap!” screen in Chrome, for example). Ugh. Why is this, and what do we do now?





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// Let’s continue going after goal #1 before starting in on the scalability goal (#2). How else can we make this process faster? How about an extension of our (don’t check evens) idea? What if we only check prime numbers as the factors: only check whether the number is divisible by 2, 3, 5, 7, 11, 13, etc. As the numbers get larger, this should save a lot of time. How would you know whether a number is prime, without calling yourself to find out, though? (-: I think we would specifically cache an array of only the primes, so we can oh-so-quickly breeze through them to check whether to add to our prime list. This won’t necessarily scale any higher, but it should be a good bit faster! Let’s code it first, then measure it.



// // Only check PRIME factors (up to sqrt). Cache primes for this.

// // Try cache first, before checking for negative / fractional.

// var prevResults = [false, false, true];

// var primes = [2];

// function isPrime7(num)

// {

// if (prevResults[num] === undefined) {

// if (num < 0 || num % 1) { return false; }



// while (prevResults.length <= num) {

// var next = prevResults.length;

// var rootNext = Math.sqrt(next);

// for (var primeIdx = 0; primes[primeIdx] <= rootNext; primeIdx++) {

// if (next % primes[primeIdx] == 0) {

// prevResults.push(false);

// break;

// }

// }

// if (primes[primeIdx] > rootNext) {

// prevResults.push(true);

// primes.push(next);

// }

// }

// }

// return prevResults[num];

// }



// So how did isPrime7 do? Did it meet our performance goals? Yes, it met some! First, we counted to 100 Million primes in only 33.91 sec, cold cache. With warm cache, we ran in 0.685 sec for subsequent 100 Million requests! So, we have goals #1 and #3 taken care of, nicely. We’ve really come far!



// About goal #2… how far can isPrime7 count, anyway? Not a lot farther, as it turns out. It counts to 122 Million without problem (getting there in 40sec), but 123 Million causes an “Aw, Snap!” So there.





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// We’ve met our #1 and #3 performance goals. The only one remaining is scalability, so we must figure out how to jettison memory usage without sacrificing the big speed that we’ve won. Let’s assess.



// Currently we are caching previous results – a boolean for every positive integer. To count to 1 Billion, we’ll need a Boolean for each of those. In JavaScript, a Boolean consumes 4 bytes, so if this algorithm did get all the way to 1 Billion, the prevResults array would consume 4GB of memory – whoa. Also, what about the cached primes array? At 100 Million, this is an array of 5.76 Million elements. These are numbers, hence eight bytes, but at 46 MB it still looks pretty svelte compared to prevResults. What if we tossed the whole prevResults array and relied only on primes[], working solo? Here’s the code:



// // Cache primes ONLY (not prevResults[]). Mem usage dramatically reduced.

// var primes = [2];

// var highestCheck = 2;

// function isPrime8(num)

// {

// if (num < 2 || num % 1) { return false; }

// if (num % 2 == 0) { return (num == 2); }



// var checkStart = Math.min(num, highestCheck) | 1;

// for (var check = checkStart; check <= num; check += 2) {

// var rootCheck = Math.sqrt(check);

// for (var primeIdx = 0; primes[primeIdx] <= rootCheck; primeIdx++) {

// if (check % primes[primeIdx] == 0) { break; }

// }

// if (primes[primeIdx] > rootCheck) {

// if (check > highestCheck) { primes.push(check); }

// if (check == num) {

// highestCheck = Math.max(highestCheck, num);

// return true;

// }

// }

// }

// highestCheck = Math.max(highestCheck, num);

// return false;

// }



// What do you think? Will we still see the gains we earned? Form a view, then join me on the next page.





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued

// The isPrime8 implementation is fascinating. It was able to count primes to 100 Million in about 50 seconds, first time (cold scenario). However, as we might expect from removing a direct-result cache, the warm scenario did lose some of the previous gains. Specifically, a second-time count to 100 Million required about 25.6 sec, rather than about 700 ms with isPrime7. On the flip side, it scales. It scales! It counted past 500 Million (it’s still going as I type this!). I’ll need to update this when it does in fact cross 1 Billion, but I trust that this will certainly occur. (Yep, it did.)



// To win the warm scenario, we’ll need to hold on to some flavor of our prevResults array. We also need to reduce our size though, and the direct result cache is by far our largest size component. This suggests that we go right at the big memory consumer and figure out even a small improvement.



// To really squeeze space, we could convert a boolean array into a BitArray. Here, we put 32 bits into the space usually filled by 1 boolean; this would dramatically reduce our cache’s size. Let’s give it a try.



// function BitArray(numBits)

// {

// var arr = [];

// for (var i=0; i<(numBits/32); i++)

// {

// arr[i] = 0;

// }

// this.numBits = numBits;



// this.read = function(bitIdx)

// {

// if(bitIdx<0 || bitIdx % 1

// || bitIdx >= this.numBits)

// { return; }

// var bitNum = bitIdx & 0b11111;

// var arrIdx = bitIdx >>> 5;

// return(arr[arrIdx]>>bitNum) &1;

// }



// this.set = function(bitIdx) {

// if( bitIdx < 0 || bitIdx % 1)

// { return; }

// if (bitIdx >= this.numBits) {

// var idx=(this.numBits+31)/32

// for(;idx<(numBits/32);idx++)

// { arr[idx] = 0; }

// this.numBits = bitIdx + 1;

// }

// var bitNum = bitIdx & 0b11111;

// var arrIdx = bitIdx >>> 5;

// arr[arrIdx] |= (1 << bitNum);

// }



// this.clear = function(bitIdx) {

// if (bitIdx < 0 || bitIdx % 1)

// { return; }

// if (bitIdx >= this.numBits) {

// var idx=(this.numBits+31)/32

// for(;idx<(numBits/32);idx++)

// { arr[idx] = 0; }

// this.numBits = bitIdx + 1;

// }

// var bitNum = bitIdx & 0b11111;

// var arrIdx = bitIdx >>> 5;

// arr[arrIdx] &= ~(1 << bitNum);

// }

// }





// Chapter 21 – Optimization



//  Is Number Prime (Series) – continued



// // prevResults to BitArray: 30x smaller

// // than bool arr. Otherwise is isPrime7.

// var primes = [2];

// var baPrimes = new BitArray(3);

// baPrimes.clear(0);

// baPrimes.clear(1);

// baPrimes.set(2);

// function isPrime9(num) {

// var result = baPrimes.read(num);

// if (result !== undefined)

// { return result; }

// if (num < 0|| num % 1)

// { return false; }

// while (num >= baPrimes.numBits) {

// var next = baPrimes.numBits;

// var rootNext = Math.sqrt(next);

// for ( var primeIdx = 0;

// primes[primeIdx] <= rootNext;

// primeIdx++) {

// if (next%primes[primeIdx] ==0) {

// baPrimes.clear(next);

// break;

// }

// }

// if (primes[primeIdx] > rootNext) {

// primes.push(next);

// baPrimes.set(next);

// }

// }

// return baPrimes.read(num);

// }



// There simply is no better way to finish off a performance journey than with a geeky bit-encoded data representation. Essentially, isPrime9 performs as isPrime7 does, but without an oversized memory footprint.



// The results are fabulous. First, scalability: isPrime9 runs to 1 Billion and keeps going! On my Mac, it almost reaches 2 Billion: much better than the requirement.



// On the other goals, during our first-time counting primes to 100 Million, isPrime9 consumed about 30.5 sec. This is well ahead of our goal of 60 secs (and destroys isPrime1’s expected 15 yrs). Great!



// Even better, the second-time count (“warm cache”), ran in 0.964 sec. It feels awesome to barely meet your performance goals, as you know you didn’t add unnecessary optimization (which can convolute code).



// What do you think about our final code? Is it as readable as the first version? Might an intern innocently ‘fix’ a bug and break an important feature by mistake? Yes – that is a reasonable worry. Like racehorses, high-performance code can be brittle. Always measure, and watch for regressions!





// Optimization Review


// Software performance is a rich area, with multiple engagement levels. Most importantly, always measure code you want to remain high-performance. Set goals. Once you achieve them, don’t let further optimization become a black hole. A few simple calculations upfront can tip you off that certain designs cannot perform as required. Always best to fix designs early, but don’t optimize code earlier than you must. Algorithm choice is critical – easily 30,000x or more, as data get large. Pay attention to highly-used code, where tiny wins are magnified. Detailed code tuning can play a role. Simple tweaks to central routines are good, but defer changes that impact readability and debuggability until absolutely needed. Get creative, be wise, and as with any aspect of your life, keep your eyes on the goals!





// Interview Tips




// Students sometimes wonder what language to use in technical interviews. The answer of course: “whatever language they tell you.” What if you don’t know what they prefer? Or, what if you are not strong in that language? Don’t despair! Most interviewers will say “Use whatever language makes you most productive….” (while they are also thinking “...as long as it is appropriate for this problem….”). So, don’t choose Ruby to solve a graphics firmware problem; don’t use Fortran in a web interview. Except for specialized roles, it is safe to write in JavaScript, Java, C# or C++. As you know, this course focuses on JavaScript: it is universal to all web front-ends and has growing server-side usage with Node.js.



// Interviewing is an artificial situation. Like anything else, you improve your performance with practice. Even post- bootcamp, code on whiteboard and paper, to simulate interviews. Resist the urge to code only at a computer. Once you complete a solution, then debug it at a computer. What common errors do you make on whiteboard or paper? Note these and refer back to them over time.



// How and what you communicate to interviewers is as important as getting the right solution. Remember that they can’t read your mind; always think out loud. As you mentally run through multiple possibilities, discarding numerous dead-end ideas, it behooves you to provide visibility into your thought process.



// Don’t jump in and start writing code immediately. Ask clarifying questions – the answers might surprise you. Often, interviewers are intentionally vague, to test whether you can extract unstated requirements. Ensuring you understand the intention upfront is important. Ask about extreme inputs, including those that violate expectations (whether intentional or not) – jot these on a corner of the whiteboard to double-check later. Restate to the interviewer your understanding of the problem. Write out a few important inputs, with expected outputs. If you think of multiple ways to solve the problem (perhaps even if not), it is enlightening to ask “What should we optimize for?” Really listen to the interviewer’s response here.



// Sooner or later you must start coding – don’t let pre-coding stretch out. A common-sense tip: start coding in the whiteboard’s upper left corner; leave room so you avoid lots of arrows (good engineers plan ahead, just sayin’…). Start with the function’s signature (name and inputs) and a few lines of input checking, just to get ink on the board. If you get stuck, try not to stall – leave a comment or pseudocode and mention that you will come back to this. Keep going; maintain velocity. Mid-stream, you may realize there is a much better solution. Don’t keep it a secret; your interviewer already knows this. Mention the new idea, but suggest that you keep going in order to finish a solution in the time you have. Once you complete something, run through your test cases before declaring a function done.



// Remember your RIOT WALK! (Recap, inputs/outputs, tests, walkthrough the code.) Do it. Every time.



// Again: always keep your ears open for interviewer hints and guidance. They want you to succeed!



// Good luck! -mp



// Have a question, clarification, correction? Heard a good one lately that you are just dying to pass on?

// Think you’d like to “stump the chump?” Contact the author at mpuryear@codingdojo.com.

// Thanks for your focus and energy!





