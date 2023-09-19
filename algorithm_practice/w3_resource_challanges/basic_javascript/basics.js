// JAVASCRIPT BASIC - 150 EXERCISES

// —————————————————————————————————————————————————————————————————————————————— >
// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output: Today is: Tuesday.
// Current time is: 10 PM: 30: 38
// —————————————————————————————————————————————————————————————————————————————— >
/*
currentDay();

function currentDay() {
    let now = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let h = now.getHours();
    let m = now.getMinutes();
    let f = 'AM';
    if (h > 12) {
        h = now.getHours() - 12;
        f = 'PM';
    }
    if (m <= 9) {
        m = '0' + m;
    }
    console.log(`Today is: ${days[now.getDay()]}`);
    console.log(`The Current Time is: ${h}:${m} ${f}`);
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 2. Write a JavaScript program to print the contents of the current window.
// —————————————————————————————————————————————————————————————————————————————— >
/*
printWindow();

function printWindow() {
    window.print();
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 3. Write a JavaScript program to get the current date.
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy
// —————————————————————————————————————————————————————————————————————————————— >
/*
currentDate();

function currentDate() {
    let today = new Date();
    console.log(`Today is ${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`);
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function triangleArea(a, b, c) {
    let x = (a + b + c) / 2;
    return Math.sqrt(x * ((x - a) * (x - b) * (x - c)));
}
console.log(triangleArea(5, 6, 7));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// —————————————————————————————————————————————————————————————————————————————— >
/*
dumbReverse();

function dumbReverse() {
    let myString = 'w3resource';
    let x = myString.split('');
    for (let i = 0; i < x.length; i++) {
        let y = x.pop();
        x.unshift(y);
    }
    let z = x.join('');
    console.log(z);
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function leapCheck(year){
    return year % 4 === 0;
};
console.log(leapCheck(1984));
console.log(leapCheck(1999));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
// —————————————————————————————————————————————————————————————————————————————— >
/*
janOneSun();

function janOneSun() {
    for (let y = 2014; y <= 2050; y++) {
        let d = new Date(y, 0, 1);
        d.getDay() == 0 ? console.log(`Sunday, January 1st, ${y}`) : false;
    }
}
// 2-28 is on weekend

birthdayWeekendCheck();

function birthdayWeekendCheck() {
    for (let y = 1974; y <= 2074; y++) {
        let d = new Date(y, 1, 28);
        d.getDay() == 6 || d.getDay() == 0 ? console.log(`Birthday on a weekend in ${y}`) : false;
    }
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// —————————————————————————————————————————————————————————————————————————————— >
/*
numberGuess();

function numberGuess() {
    let num = Math.floor(Math.random() * 10 + 1);
    let guess = prompt('pick a number 1 to 10');
    guess === num ? alert("Good Work") : alert("Not matched");
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 9. Write a JavaScript program to calculate days left until next Christmas.
// —————————————————————————————————————————————————————————————————————————————— >
/*
cmasCountdown();

function cmasCountdown() {
    let cd = new Date();
    let cmas = new Date(cd.getFullYear(), 11, 25);
    console.log(`There are ${Math.ceil((cmas - cd) / 8.64e+7)} days till Christmas.`);
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 10. Write a JavaScript program to calculate multiplication and division of two numbers(input from user).
// —————————————————————————————————————————————————————————————————————————————— >
/*
calc();

function calc() {
    let a = prompt(`please give a number`);
    let x = prompt(`multiply or divide?`);
    let b = prompt(`please give a 2nd number`);
    if (x == 'multiply') {
        alert(a * b);
    }
    else if (x == 'divide') {
        alert(a / b);
    }
    else {
        alert('nope');
    }
}
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.[Formula: c / 5 = (f - 32) / 9[where c = temperature in Celsius and f = temperature in Fahrenheit]Expected Output: 60° C is 140° F 45° F is 7.222222222222222° C
// —————————————————————————————————————————————————————————————————————————————— >
/*
function convertTemp(far){
    return (far - 32)  * (5 / 9);
}
console.log(convertTemp(94));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 12. Write a JavaScript program to get the website URL(loading page).—————————————————————————————————————————————————————————————————————————————— >
/*
console.log(document.URL);
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 13. Write a JavaScript exercise to create a variable using a user - defined name.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function createVar(x){
    return x = 'some value';
}

console.log(createVar('newVar'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 14. Write a JavaScript exercise to get the extension of a filename.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function getExtension(filename){
    return filename.split('.').pop();
}
console.log(getExtension('filename.xyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function dif13(num){
    return num > 13 ? (num - 13) * 2 : 13 - num;
}
console.log(dif13(36));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 16. Write a JavaScript program to compute the sum of the two given integers.If the two values are same, then returns triple their sum.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function sumOrTriple(a,b){
    return a === b ? a * 3 : a +b ;
}
console.log(sumOrTriple(2, 2));
console.log(sumOrTriple(34, -3));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function dif19(num){
    return num - 19 < 19 ? num - 19 : (num - 19) * 3;
}

console.log(dif19(2));
console.log(dif19(406));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function fiftyCheck(a,b){
    return (a === 50 || b === 50) || (a + b === 50);
}
console.log(fiftyCheck(4, 46));
console.log(fiftyCheck(50, 23));
console.log(fiftyCheck(7,6));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.  —————————————————————————————————————————————————————————————————————————————— >
/*
function within20(n) {
    return (n <= 120 && n >= 80) || (n <= 420 && n >= 380);
}

console.log(within20(115));
console.log(within20(388));
console.log(within20(26));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function dualCheck(a,b){
    return (a > 0 && b < 0) || (b > 0 && a < 0);
}
console.log(dualCheck(26,-9));
console.log(dualCheck(26,19));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function pyCheck(myString) {
    return !myString.startsWith('Py') ? 'Py' + myString : myString;
}
console.log(pyCheck('nutter'));
console.log(pyCheck('Pylo'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function removeChar(str, char){
    return str.replace(str.charAt(char), '');
}

console.log(removeChar('method returns the part of the string between the start and end', 2));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.The string length must be greater than or equal to 1.  —————————————————————————————————————————————————————————————————————————————— >
/*
function charFlip(str){
    let newStr = str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0);
    console.log(newStr);
}

charFlip('abc-xyz')
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function bookendStr(str) {
    let newStr = str.charAt(0) + str + str.charAt(0);
    console.log(newStr);
}

bookendStr('abc-xyz')
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function threeOrSeven(num){
    return num % 3 === 0 || num % 7 === 0;
}

console.log(threeOrSeven(26));
console.log(threeOrSeven(42));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.The string length must be 3 or more.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function threeCap(str){
    let newStr = str.slice(str.length - 3, str.length) + str + str.slice(str.length - 3, str.length);
    return newStr;

}

console.log(threeCap('abcdefghijk'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function javaCheck(str){
    return str.startsWith('Java');
}

console.log(javaCheck('JavaScript'));
console.log(javaCheck('NotJavaScript'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 28. Write a JavaScript program to check if two given integer values are in the range 50 thru 99 (inclusive). Return true if either of them are in the said range.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function checkFifNin(a,b){
    return (a >= 50 && a <= 90) || (b >= 50 && b <= 90);
}

console.log(checkFifNin(30, 60));
console.log(checkFifNin(8, 4));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 29. Write a JavaScript program to check if three given integer values are in the range 50. .99(inclusive).Return true if one or more of them are in the said range.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function checkFifNin(a, b, c) {
    return (a >= 50 && a <= 90) || (b >= 50 && b <= 90) || (c >= 50 && c <= 90);
}

console.log(checkFifNin(30, 60, 45));
console.log(checkFifNin(8, 4, 2));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function scriptCheck(str) {
    return str.slice(4, 10) === 'Script' ? str.slice(0, 4) : str;
}
console.log(scriptCheck('JavaScript'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 31. Write a JavaScript program to find the largest of three given integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function largeInt(myArr){
    return Math.max(...myArr); // ... spread operator
}
console.log(largeInt([26,54,23]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function num100(num1, num2) {
    return Math.abs(num1 - 100) < Math.abs(num2 - 100) ? num1 : num2;
}
console.log(num100(4, 106));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 33. Write a JavaScript program to check if two numbers are in range 40 to 60 or in the range 70 to 100 inclusive.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function dualCheck(x, y){
    return ((x >= 40 && x <= 60 && y >= 70 && y <= 100) || (x >= 70 && x <= 100 && y >= 40 && y <= 60)) ? 'the number are in range': 'not a match';
}
console.log(dualCheck(45, 80));
console.log(dualCheck(145, 80));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40 to 60 inclusive.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function checkRange(x,y){
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60){
        return Math.max(x,y);
    } else {
        return 'pick new numbers';
    }
}
console.log(checkRange(42,58));
console.log(checkRange(23,12));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++;
        }
    }
    return count >= 2 && count <= 4;
}

console.log(newFunction('some string with s in it', 's'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr, num) {
    let count = 0;
    myArr.forEach(e => {
        e.toString().endsWith(num.toString()) ? count++ : false;
    })
    return count == myArr.length;
}

console.log(newFunction([256, 326, 456, ], 6));
console.log(newFunction([256, 326, 174, 294, 456, ], 6));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 37. Write a JavaScript program to create new string with first 3 characters are in lowercase. If the string length is less than 3 convert all the characters in upper case.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.length < 3 ? str.toUpperCase() : str.slice(0, 3).toUpperCase() + str.slice(3, str.length);
}

console.log(newFunction('some stuff here'));
console.log(newFunction('so'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89 to 100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function test(total_mark, final_exam) {
    return (final_exam == 'true') ? total_mark >= 90 : (total_mark >= 80 && total_mark <= 100);
}

console.log(test("78", " "));
console.log(test("89", "true "));
console.log(test("99", "true "));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50 to 80 return 65 other wise return 80.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(a,b) {
    return (a + b) >= 50 && (a + b) <= 80 ? 65 : 80;
}
console.log(newFunction(26, 30));
console.log(newFunction(26, 70));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.  —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(a,b) {
    return a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8 ? true : false;
}

console.log(newFunction(4,4));
console.log(newFunction(26,18));
console.log(newFunction(2,18));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function numCheck(a, b, c) {  // Could just do number = w/o adding
    if ((a + b + c) / 3 === a) {
        return 30;
    } else if ((a + b) / 2 == a || (a + c) / 2 == a || (b + c) / 2 == b) {
        return 20;
    } else {
        return 40;
    }
}
console.log(numCheck(4, 4, 4));
console.log(numCheck(4, 8, 8));
console.log(numCheck(4, 8, 12));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 42. Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode.
// Note: Strict mode - > 10, 15, 31: Soft mode - > 24, 22, 31 or 22, 22, 31
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(a,b,c) {
    return a < b && b < c ? 'Strict mode' : 'Soft Mode';
}
console.log(newFunction(3,7,9));
console.log(newFunction(3,9,7));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 43. Write a JavaScript program to check from three given numbers(non negative integers) that two or all of them have the same rightmost digit.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function sameLastDigit(a, b, c) {
    return (a % 10 === b % 10) || (a % 10 === c % 10) || (b % 10 === c % 10);  // % < 10 == original number
}
console.log(sameLastDigit(66, 606, 6766));
console.log(sameLastDigit(1, 11, 31));
console.log(sameLastDigit(1, 2, 3));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function twentyCheck(x, y, z) {
    return (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x));
}
console.log(twentyCheck(31,12,105));
console.log(twentyCheck(300,12,5));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(a,b) {
    return a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15 ? true : false;
}

console.log(newFunction(11,4));
console.log(newFunction(26,18));
console.log(newFunction(2,18));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 46. Write a JavaScript program to check two given non - negative integers and if one of the number(not both) is multiple of 7 or 11.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function valCheck(a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    } else
        return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).
// For example 40 presents in 400 and 4000
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(num) {
    return num * 10 <= 10000 ? true : false;
}
console.log(newFunction(42));
console.log(newFunction(160));
console.log(newFunction(9810));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 48. Write a JavaScript program to reverse a given string.
//—————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    // let arr = str.split('');
    // arr.reverse();
    // return arr.join('');
    return str.split('').reverse().join('');
}
console.log(newFunction('abscdefg'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(1 + str.charCodeAt(i));
    }
    return newStr;
}
console.log(newFunction('cfjmx'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
// —————————————————————————————————————————————————————————————————————————————— >

// function newFunction(str) {
//     str.split(' ').forEach(e => {
//         var newStr = [];
//         newStr += e.charAt(0).toUpperCase() + e.slice(1, e.length);
//     });
//     return newStr.join();
// }

// console.log(newFunction('capitalize the first letter of each word of a given string'));
/*
function newFunction(str) {
    let myArr = str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1, e.length));
    return myArr.join(' ');
}
console.log(newFunction('capitalize the first letter of each word of a given string'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 51. Write a JavaScript program to convert a given number to hours and minutes.
//—————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(num) {
    return `${Math.floor(num / 60)} hours and ${num % 60} minutes`;
}
console.log(newFunction(256));
console.log(newFunction(488));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.
//—————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.split('').sort().join('');
}
console.log(newFunction('mynameisjason'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere(at least once) in a given string.
//—————————————————————————————————————————————————————————————————————————————— >
/*
function ab_Check(str) {
    return (/a....b/).test(str) || (/b....a/).test(str);
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 54. Write a JavaScript program to count the number of vowels in a given string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.match(/[aeiou]/g).length;
}
console.log(newFunction('dummy text'));
console.log(newFunction('lotso-ooooooooooooooooooo'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.match(/p/g).length === str.match(/t/g).length;
}
console.log(newFunction('patpat'));
console.log(newFunction('patttttpat'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(a,b) {
    return Math.floor(a / b).toString().split('').join(', ');
}

console.log(newFunction(26, 2));
console.log(newFunction(27, 2));
console.log(newFunction(2560, 8));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 57. Write a JavaScript program to create a new string of specified copies(positive number) of a given string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function strCopy(str, n) {
return str.repeat(n);
}
console.log(strCopy("xyz", 5));
console.log(strCopy("aeiou", 108));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.The length of the given string must be 3 and above.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function lastThree(str) {
    return str.slice(str.length-3, str.length).repeat(4);
}
console.log(lastThree('abcmnoxyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 59. Write a JavaScript program to extract the first half of a string of even length.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.substring(0, Math.floor(str.length/2));
}
console.log(newFunction('abcdefg'));
console.log(newFunction('abcxyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 60. Write a JavaScript program to create a new string without the first and last character of a given string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.substring(1, (str.length-1));
}
console.log(newFunction('abcdefg'));
console.log(newFunction('abcxyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 61. Write a JavaScript program to concatenate two strings except their first character.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str1, str2) {
    return str1.substring(1, str1.length) + str2.substring(1, str2.length); // anything further this should be a separate functions
}
console.log(newFunction('abc', 'xyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 62. Write a JavaScript program to move last three character to the start of a given string.The string length must be greater or equal to three.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.substring(str.length - 3, str.length) + str.substring(0, str.length - 3)
}
console.log(newFunction('abcmnoxyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    let middle = (str.length + 1) / 2;
    return str.slice(middle - 1.5, middle + 1.5);
}
console.log(newFunction('abcdefghi'));
console.log(newFunction('abcdefgh'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str1, str2) {
    return str1.slice(0, str2.length) + str2.slice(0, str1.length);
}

console.log(newFunction('abcdefgh', 'xyz'));
console.log(newFunction('abc', 'uvwxyz'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 65. Write a JavaScript program to test if a string end with "Script".The string length must be greater or equal to 6.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function scriptTest(str) {
    return str.endsWith('Script') && str.length > 6 ? true : false;
}
console.log(scriptTest('JavaScript'))
console.log(scriptTest('JavaScripts'))
console.log(scriptTest('dgffgsgfsgfdsgJavaScript'))
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function cityTest(str) {
    return str.startsWith('New') || str.startsWith('Los') ? str : 'nope';
}
console.log(cityTest('New York'));
console.log(cityTest('Los Angeles'));
console.log(cityTest('Phoenix'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function pTest(str) {
    return str.charAt(0) == 'p' || str.charAt(str.length) == 'p' ? str.substring(1, str.length - 1) : str;
}
console.log(pTest('piscapo'));
console.log(pTest('joe'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 68. Write a JavaScript program to create a new string using the first and last n characters from a given sting.The string length must be greater or equal to n.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function firstLast(str, n){
return str.substring(0, n) + str.substring(str.length - n, str.length);
}
console.log(firstLast('abcdefghjklmnopqrstuvwxyz', 4));
console.log(firstLast('firstmiddlelast!', 5));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr.reduce((a, b) => a + b);
    }

console.log(newFunction([26,54,231,89]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    let temp = myArr.shift();
    return myArr.concat(temp); // longer but not limited to 3
}

console.log(newFunction([26, 54, 231, 89]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr[0] === 1 || myArr[myArr.length -1] === 1;
}
console.log(newFunction([1, 26, 54, 231, 89]));
console.log(newFunction([26, 54, 231, 89, 1]));
console.log(newFunction([26, 54, 231]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 72. Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr[0] ===  myArr[myArr.length - 1];
}
console.log(newFunction([1, 26, 54, 231, 89]));
console.log(newFunction([26, 54, 231, 89, 1]));
console.log(newFunction([26, 54, 231, 26]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr.reverse();
}
console.log(newFunction([1, 26, 54, 231, 89]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr[0] > myArr[myArr.length-1] ? myArr.fill(myArr[0]) : myArr.fill(myArr[myArr.length-1]);
}
console.log(newFunction([26, 54, 231, 89, 1]));
console.log(newFunction([26, 54, 231, 89]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
//—————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr1, arr2) {
    return [arr1[1], arr2[1]];
}
console.log(newFunction([26, 54, 231], [55, 66, 77]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    return [arr[0], arr[arr.length-1]];
}
console.log(newFunction([26, 54, 231, 55, 66, 77]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    // return myArr.indexOf(1) >= 0 || myArr.indexOf(3) >= 0 ? true : false;
    return myArr.includes(1) || myArr.includes(3);
}
console.log(newFunction([26, 54, 231, 55, 66, 77]));
console.log(newFunction([3, 54, 231, 55, 66, 77]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(myArr) {
    return myArr.indexOf(1) === -1 && myArr.indexOf(3) === -1 ? true : false;
}
console.log(newFunction([26, 54, 231, 55, 66, 77]));
console.log(newFunction([3, 54, 231, 55, 66, 77]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice.The array length should be 0, 1, or 2.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function twice3040(arra1) {
    let a = arra1[0];
    let b = arra1[1];
    return (a === 30 && b === 30) || (a === 40 && b === 40);
}
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), (arr[0])];  // use spread operator
    // return [arr.pop(), ...arr.slice(1), arr.shift()]
}
console.log(newFunction([3, 54, 231, 55, 66, 77]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 81. Write a JavaScript program to add two digits of a given positive integer of length two.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(num) {
    return Math.floor(num * .1) + (num % 10);
}
console.log(newFunction(54));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 82. Write a JavaScript to add two positive integers without carry.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function addDigits(num1, num2) {
    let arr1 = num1.toString().split(''),
        arr2 = num2.toString().split(''),
        newArr = [];
    length = Math.min(arr1.length, arr2.length),
        difference = Math.abs(arr1.length - arr2.length);

    if (arr1.length >= arr2.length) {
        for (let i = length - 1; i >= 0; i--) {
            let digit = Number(arr2[i]) + Number(arr1[difference + i]);
            if (digit >= 10) {
                newArr.unshift(digit % 10);
            } else newArr.unshift(digit);
        }
        for (let i = difference - 1; i >= 0; i--) {
            newArr.unshift(arr1[i]);
        }
        return Number(newArr.join(''));
    } else if (arr2.length > arr1.length) {
        for (let i = length - 1; i >= 0; i--) {
            let digit = Number(arr1[i]) + Number(arr2[difference + i]);
            if (digit >= 10) {
                newArr.unshift(digit % 10);
            } else newArr.unshift(digit);
        }
        for (let i = difference - 1; i >= 0; i--) {
            newArr.unshift(arr2[i]);
        }
        return Number(newArr.join(''));
    }
}

console.log(addDigits(222, 911)); // 133
console.log(addDigits(200, 9000)); // 9200
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 83. Write a JavaScript to find the longest string from an given array of strings.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    arr.sort((a,b) => a.length + b.length);
    return arr[0];
}
console.log(newFunction(['abc', 'abcdef', 'asdfghjk', ' qwertyuioasdfgh']));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(1 + str.charCodeAt(i));
    }
    return newStr;
}
console.log(newFunction('cfjmx'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 85. Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on.Now compute the sum of two parts and store into an array of size two.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr){
let arr1 =[];
let arr2 =[];
for(let i = 0 ; i < arr.length ; i++){
    if(i % 2 == 0){
        arr1.push(arr[i])
    } else {
        arr2.push(arr[i])
    }
}
console.log(arr1.reduce((a,b) => a + b));
console.log(arr2.reduce((a, b) => a + b));
}
newFunction([26, 54, 23, 15, 16, 89, 21, 56, 48,]);
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 86. Write a JavaScript program to find the types of a given angle.
// ••• Types of angles:
// ••• Acute angle: An angle between 0 and 90 degrees.
// ••• Right angle: An 90 degree angle.
// ••• Obtuse angle: An angle between 90 and 180 degrees.
// ••• Straight angle: A 180 degree angle.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(angle) {
    if (angle > 0 && angle < 90) {
        return 'acute';
    } else if (angle == 90) {
        return 'right';
    } else if (angle > 90 && angle < 180) {
        return 'obtuse';
    } else if (angle == 180) {
        return 'straight';
    } else {
        return 'over 180';
    }
}
console.log(newFunction(65));
console.log(newFunction(165));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function areSimilar(a, b) {
    let s = [];
    for(let i = 0; i < a.length;i++)
        if(a[i] != b[i])
            s.push(i);
            console.log(s)
    return s.length == 0 || s.length == 2 && a[s[0]] == b[s[1]] && b[s[0]] == a[s[1]];
}

console.log(areSimilar([10,20,30], [10,20,30]))
console.log(areSimilar([10,20,30], [30,10,20]))
console.log(areSimilar([10,20,30,40], [10,30,20,40]))
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 88. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(num1, num2, div) {
    return (num1 % div === 0 && num2 % div === 0) || (num1 % div !== 0 && num2 % div !== 0)
}
console.log(newFunction(15,25,5));
console.log(newFunction(15,25,2));
console.log(newFunction(15,25,3));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator(*) to obtain x * y = z
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(num1, num2, out) {
    return num1 + num2 === out ||
        num1 - num2 === out ||
        num1 * num2 === out ||
        num1 / num2 === out
}
console.log(newFunction(15, 25, 40));
console.log(newFunction(15, 25, 2));
console.log(newFunction(3, 25, 75));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 90. Write a JavaScript program to find the kth greatest element of a given array of integers
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr, num) {
    return arr.sort((a, b) => a - b)[num-1]
}
console.log(newFunction([15, 25, 10, 2, 108, 40], 2));
console.log(newFunction([15, 25, 10, 2, 108, 40], 5));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    let newArr = [];
    for(let i = 0 ; i < arr.length-1 ; i++){
    newArr.push(arr[i] + arr[i +1]);
    }
    return newArr.sort((a,b) => b - a)[0];
}
console.log(newFunction([15, 25, 10, 2, 108, 40]));
console.log(newFunction([15, 250, 10, 2, 150, 10]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 92. Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i] - arr[i + 1]);
    }
    return newArr.sort((a, b) => b - a)[0];
}
console.log(newFunction([15, 25, 10, 2, 108, 40]));
console.log(newFunction([15, 250, 10, 2, 150, 10]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    arr.sort((a, b) => b - a);
    return arr[0] - arr[arr.length -1];
}
console.log(newFunction([15, 25, 10, 2, 108, 40]));
console.log(newFunction([15, 250, 10, 2, 150, 10]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 94. Write a JavaScript program to find the number which appears most in a given array of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr) {
    let counter = {};
    arr.forEach(function (val) {
        counter[val] = (counter[val] || 0) + 1; // research hasOwnProperty

    });
    return counter;  // can also sort object & return 1st value
}
console.log(newFunction([15, 2, 25, 10, 2, 108, 2, 40, 25]));
*/
/*
function newFunction(arr) {
    let myObj = {};
    arr.forEach(element => {
        if (myObj.hasOwnProperty(element)) {
            myObj[element]++;
        }
        else {
            myObj[element] = 1;
        }
    });
    return myObj;
}
console.log(newFunction([2, 5, 6, 7, 8, 9, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 15]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr, a, b) {
    return arr.map((item) => {
        if (item === a) return b;
        return item;
    });
}
console.log(newFunction([5,5,5,3,3,3,2,2,2,1,1,1,1,1,1,], 2, 'two'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr, a, b) {
    let newArr = [];
    for(let i = 1; i < arr.length ; i++){
        newArr.push(Math.abs(arr[i] - arr[i-1]));
    };
    return newArr.reduce((a,b) => a + b);
}
console.log(newFunction([1, 2, 3, 2, -5]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 97. Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
// —————————————————————————————————————————————————————————————————————————————— >
/*
// BORROWED FROM https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-97.php

function build_Palindrome(new_str) {
  let flag;
  for (let i = new_str.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

console.log(build_Palindrome("abcddc"))
console.log(build_Palindrome("122"))
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 98. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
    return str.match(/[A-Z]/g).length > str.match(/[a-z]/g).length ? str.toUpperCase() : str.toLowerCase() ;
}
console.log(newFunction('Jason'));
console.log(newFunction('jASON'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 99. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str1, str2) {
    return str1.split('').sort().join() == str2.split('').sort().join();
}
console.log(newFunction('jason', 'nosaj'));
console.log(newFunction('billy', 'nosaj'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 100. Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    for(let i = 0 ; i < arr1.length ; i++ ){
        if(arr2.indexOf(arr1[i]) != -1){
            return true;
        } else {
            return false;
        }
    }
}
console.log(newFunction([6, 4, 4, 3, 2, 1], [1, 2, 1, 2, 2,]));
console.log(newFunction([6, 4, 4, 3, 2, 1], [0, 0, 0, 0, 0]));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
// —————————————————————————————————————————————————————————————————————————————— >
/*
function newFunction(str) {
//    return !/(?:[A-Z]{2}|[a-z]{2}|[\d]|[^A-Za-z]+)/g.test(str);
    // return !/^[A-Z]{2}|[a-z]{2}|[\d]|[^A-Za-z]+$/g.test(str);
    return ^(?![\d])(?![A-Z]{2})(?![a-z]{2})[A-Za-z ]+$
}
console.log(newFunction('test THIS string'));
console.log(newFunction('TeSt Me ToO'));
console.log(newFunction('abc8965'));
*/
// —————————————————————————————————————————————————————————————————————————————— >
// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
// —————————————————————————————————————————————————————————————————————————————— >

function number_of_InversionsNaive(arr) {
    let ctr = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                ctr++;
        }
    }
    return ctr;
}

console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));
console.log(number_of_InversionsNaive([1, 5, 4, 3]));
console.log(number_of_InversionsNaive([10, 30, 20, -10]));


// —————————————————————————————————————————————————————————————————————————————— >
// 103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 104. Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 107. Write a JavaScript program to find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other one.For example - The output of[1, 3, 2] - > 2 - (1, 3), (1, 2).The output of[2, 4, 6] - > 2 - (2, 4), (2, 6) The output of[2, 4, 16] - > 3 - (2, 4), (2, 16), (4, 16) —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 108. Write a JavaScript program to create the dot products of two given 3 D vectors.Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 113. Write a JavaScript program to calculate the sum n + n / 2 + n / 4 + n / 8 + ....where n is a positive integer and all divisions are integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not.A string is considered correct sentence
// if it starts with the capital letter and ends with a full stop(.).—————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not.In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero(the diagonal from the upper left to the lower right).Example: [1, 0, 0], [0, 2, 0], [0, 0, 3]]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3]]) = false
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 116. Write a JavaScript program to find all the possible options to replace the hash in a string(Consists of digits and one hash(#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be: ["210", "240", "270"]
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 117. Write a JavaScript program to check
// if a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [
// [1, 0, 0],
// [0, 1, 0],
// [0, 0, 1]
// ] - > true[[1, 0, 0], [0, 1, 0], [1, 0, 1]] - > false
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 118. Write a JavaScript program to check
// if a given number is in a given range.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 119. Write a JavaScript program to check
// if a given integer has an increasing digits sequence.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 120. Write a JavaScript program to check
// if a point lies strictly inside a given circle.
// Input:
// Center of the circle(x, y)
// Radius of circle: r
// Point inside a circle(a, b)
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 121. Write a JavaScript program to check
// if a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular
// if all the entries above the main diagonal are zero.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 122. Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 123. Write a JavaScript program to find
// if the members of an given array of integers is a permutation of numbers from 1 to a given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 124. Write a JavaScript program to create the value of NOR of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth - functional operator which produces a result that is the negation of logical or.That is, a sentence of the form(p NOR q) is true precisely when neither p nor q is true - i.e.when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false;
// For x = false and y = false, the output should be logical_Nor(x, y) = true.

// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— > 125. Write a JavaScript program to find the longest string from a given array.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 126. Write a JavaScript program to get the largest even number from an array of integers.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 127. Write a JavaScript program to reverse the order of the bits in a given integer.
// 56 - > 111000 after reverse 7 - > 111
// 234 - > 11101010 after reverse 87 - > 1010111
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 128. Write a JavaScript program to find the smallest round number that is not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros. [3] So, 590 is rounder than 592, but 590 is less round than 600.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 130. Write a JavaScript program to find the number of even digits in a given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 131. Write a JavaScript program to create an array of prefix sums of the given array.
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ...is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1 + x2
// ...
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 132. Write a JavaScript program to find all distinct prime factors of a given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 133. Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper.When the numerator and the denominator are both positive, the fraction is called proper
// if the numerator is less than the denominator, and improper otherwise.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 134. Write a JavaScript program to change the characters(lower
// case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 135. Write a JavaScript program to remove all characters from a given string that appear more than once.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 136. Write a JavaScript program to replace the first digit in a string(should contains at least digit) with $ character.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 137. Write a JavaScript program to test
// if a given integer is greater than 15
// return the given number, otherwise
// return 15.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 138. Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 139. Write a JavaScript program to find the position of a rightmost round number in an array of integers.Returns 0
// if there are no round number.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 140. Write a JavaScript program to check
// if all the digits in a given number are the same or not.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 141. Write a JavaScript program to find the number of elements which presents in both of the given arrays.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 142. Write a JavaScript program to simplify a given absolute path
// for a file in Unix - style.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 143. Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.
// Note: Do not change the order
// if the lengths of two string are same.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 144. Write a JavaScript program to
// break an address of an url and put it 's part into an array.
// Note: url structure:: //.org[/] and there may be no part in the address.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ...+n <= an given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 146. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 147. Write a JavaScript program to compute the sum of all digits that occur in a given string.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 149. Write a JavaScript program to change the capitalization of all letters in a given string.
// —————————————————————————————————————————————————————————————————————————————— >




// —————————————————————————————————————————————————————————————————————————————— >
// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
// —————————————————————————————————————————————————————————————————————————————— >