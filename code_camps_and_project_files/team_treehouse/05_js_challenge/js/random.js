/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// Math.random() * (max - min) + min;

// Call the function and pass it different values

const lower = prompt('enter a low number');
const upper = prompt('enter a high number');

const twoNumbers = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const newNumber = twoNumbers(+lower, +upper);

const main = document.querySelector('main');
main.innerHTML = `your new number is ${newNumber}`;


if (approvedBirthdays.indexOf(todaysBirthday) = -1) { 
    document.write(genericBirthdayMessage)
}
else {
    alert('create a new message')
}