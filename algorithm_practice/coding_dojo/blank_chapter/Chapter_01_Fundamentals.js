// Algorithm Challenges
// The Dojo Collection
// Chapter_01_Fundamentals

//  Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

//  Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

//  Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

//  Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

//  Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

//  You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

//  Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

//  Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

//  Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

//  Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

//  What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

//  Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

//  Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

//  Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

//  The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

//  Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

//  Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

//  First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

//  Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

//  Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

//  This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

//  Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

//  Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

//  Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

//  Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

//  Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

//  Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

//  Double Vision
// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

//  Count Positives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

//  Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

//  Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

//  Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

//  Add Seven to Most
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

//  Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

//  Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

//  Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

//  Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

//  Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

//  Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

//  Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

//  Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

//  What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

//  Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

//  Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

//  More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

//  Short Answer Questions: Fundamentals
// What is source code?
// What makes computers so “smart”, anyway?
// What is the purpose of a programming language?
// What are 3 examples of programming languages? Why are there so many of these?
// What is a variable? Why are variables useful?
// What is the difference between a single-equals (=) and a double-equals (==)?
// What is the difference between a double-equals (==) and a triple-equals (===)?
// Why does the developer console exist?
// When we talk about “conditional” statements, what does that mean? What is an example?
// Why would we want FOR or WHILE loops in our source code?
// When would you use a WHILE loop, instead of a FOR loop?
// What is a function? Why would we use functions?
// How many values can you receive back from a function? How many values can you send in?
// What is an array? How many values does it hold?
// What is a T-diagram and why should I know how to use one?
// What are the two ways to comment JS code? When would you use one versus the other?

//  Weekend Challenge: Fundamentals
// This weekend, for a challenge, create a fill-in-the-blank quiz game. Ask the user’s name, then refer to the user by name as you ask him/her a series of questions that you have stored in an array. Use the prompt() function to get each input from the user and compare it to the answer you expected. When the user enters “Q” (for quit), or perhaps when the user hits [Cancel], exit the game and print the statistics of the game to the console: user name, number of questions answered and questions correct.


