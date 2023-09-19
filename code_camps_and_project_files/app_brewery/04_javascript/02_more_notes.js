// create a 90's love calculator
function loveCalculator() {
        const name1 = prompt('Person 1 name?');
        const name2 = prompt('Person 2 name?');
        const loveChance = Math.floor(Math.random() * 100) + 1;
        alert(`${name1} and ${name2} have a ${loveChance}% shot at LOVE`);
        // could add if else or case switch
}

loveCalculator();

// check for leap year
function leapYearCheck(year) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                console.log(`${year} IS a leap year`);
        } else {
                console.log(`${year} is NOT a leap year`);
        }
}

leapYearCheck(1986);
leapYearCheck(1988);
leapYearCheck(2000);

// put fizz buzz in an array
const myArr = [];

for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
                myArr.push('Fizz Buzz');
        } else if (i % 5 === 0) {
                myArr.push('Buzz');
        } else if (i % 3 === 0) {
                myArr.push('Fizz');
        } else {
                myArr.push(i);
        }
}

console.log(myArr);

// random name picking function

const famNames = ['Regan', 'Jason', 'Emma', 'Copper', 'Daisy', 'Knobi', 'Squirt'];

function makeDinner(arr) {
        const ranNum = Math.floor(Math.random() * famNames.length);
        console.log(`it is ${arr[ranNum]}'s turn to make dinner`);
}

makeDinner(famNames);

// create fibonacci
function fibonacci(n) {
        return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

// remember (n-1) + (n-2)
