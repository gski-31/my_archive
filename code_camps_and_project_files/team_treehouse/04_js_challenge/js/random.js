// Collect input from a user
const userNumber = prompt('please pick a number to generate up until');

// Convert the input to a number
// skip with +

// Use Math.random() and the user's number to generate a random number
const newNumber = Math.floor(Math.random() * +userNumber + 1);

// Create a message displaying the random number
const main = document.querySelector('main');
main.innerHTML = `<p>your new number is</p><h1>${newNumber}</h1>`;
