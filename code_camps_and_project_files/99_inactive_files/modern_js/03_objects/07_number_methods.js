const num = 888.88;

console.log(num.toFixed(1));

console.log(Math.round(985.23));

// Math.floor(Math.random() * (max - min + 1)) + min;

/* CHALLENGE: create guessing game function */

const guessingGame = (num, min, max) => num === Math.floor(Math.random() * (max - min + 1)) + min;

console.log(guessingGame(8, 8, 8));
console.log(guessingGame(8, 6, 10));
