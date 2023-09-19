/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const hutt = prompt('What species is Jabba?').toUpperCase();
const order = prompt('Which order number brought about the death of the Jedi?');
const fisher = prompt('What is the last name of the actress who played Princess Leia?').toUpperCase();
const jakku = prompt('On which planet do we first meet Rey in The Force Awakens?').toUpperCase();
const ewok = prompt('Which furry species lives on the forest moon of Endor?').toUpperCase();

// 2. Store the rank of a player
let playerRank = 0;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
if (hutt === 'HUTT') {
        playerRank += 1;
}
if (order == 66) {
        playerRank += 1;
}
if (fisher === 'FISHER') {
        playerRank += 1;
}
if (jakku === 'JAKKU') {
        playerRank += 1;
}
if (ewok === 'EWOK' || 'EWOKS') {
        playerRank += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

const medals = ['paper', 'bronze', 'bronze', 'silver', 'silver', 'gold'];

// 6. Output results to the <main> element
main.innerHTML = `<h1>Thank you for playing</h1><p>You have earned a ${medals[playerRank]} medal</p>`;

console.log(playerRank);
console.log(main);
