// Algorithm Challenges
// The Dojo Collection
// Chapter_02_Fundamentals_Part_II

//  Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

//  Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

//  Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.

// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

//  Character Art
// From the above, derive the following that accept and draw the given characters, not just asterisks:

// drawLeftChars(num,char) // For all three of these, you

// drawRightChars(num,char) // can safely assume that 'char'

// drawCenteredChars(num,char) // is a string with length 1

//  Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).

//  Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Second: can you simplify/shorten your code?

// Example output, given (94):
// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.



//  Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;

// Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;

// Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.

// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

//  Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

//  Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

//  Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

//  Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.

//  Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

//  Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

//  Clock Hand Angles, Revisited
// Return to your previous clockHandAngles solution. Allow fractional values for input seconds, but change your implementation to print only integer values for angles (in degrees) of the various hands.

//  Extract-o-matic
// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1), return 4.

// Third: handle negative num values as well, doing what you think is appropriate.

//  Most Significant Digit
// If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant. Given number of any size, return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here . Hint: use WHILE to bring the most significant digit into range where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

// Second: handle negative num values as well, doing what you think is appropriate.

//  Gaming Fun(damentals)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

// 2) Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

// 3) Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.

// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.

//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

//  Claire is Where?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

//  Date, on a Deserted Island
// After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises.

// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement.

// 2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1.

// 3) Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!"

// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops.

// 5) Now expand monthName() to create monthToDays(monthNum), returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month.

// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName() to create dayToMonth(dayNum). If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75, return "March".

// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let’s reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year’s Eve party, but he knows it was a Saturday. Given 142, return "Monday, May 22, 2017".

// 8) Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475, return "Thursday, March 15, 2040".

// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is). Given 139947, return "Tuesday, February 29, 2400".

//  Short Answer Questions: Fundamentals, Part II
// What is the JavaScript Math library? What does it contain?
// Why aren’t all those functions just included in JavaScript automatically?
// If I call Math.random(), what will it return?
// What do the following functions do: Math.floor, Math.ceil, Math.trunc, Math.round?
// When do Math.floor and Math.trunc not return the same value?
// What is the % operator? When is it useful?
// How do I make variables declared outside (right next to) a function visible inside it?
// Why should I comment my code? If I know what it does, isn’t commenting just a waste of time?

//  Weekend Challenge: Fundamentals, Part II
// This weekend, complete the “Date, on a Deserted Island” problem series, if you have not yet done so.
// Then, if time allows, incorporate the Math library into a new quiz game. See if users can memorize 10 digits of Pi. Do the same for the constant e, the square root of 2, as well as the square root of 1/2. These values are all available within the Math library. What other Math functions or properties can you incorporate? Continue to use prompt, and output the game statistics when the user quits.



