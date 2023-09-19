// create higher order functions to create basic calc
function add(num1, num2) {
        return num1 + num2;
}

function subtract(num1, num2) {
        return num1 - num2;
}

function multiply(num1, num2) {
        return num1 * num2;
}

function divide(num1, num2) {
        return num1 / num2;
}

function calculate(num1, num2, operator) {
        return operator(num1, num2);
}

calculate(6, 7, multiply);
calculate(6, 7, add);

// create simple object
const Jason = {
        name: 'Jason',
        height: 71,
        color: 'purple',
};

// create constructor people
function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
}

const Barb = new Person('Barb', 24, 'Rocker');
const Poppy = new Person('Poppy', 17, 'Popper');

console.log(Barb);
console.log(Poppy);

// add methods to constructor function

function Peep(name, age, job, message) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.message = alert(message);
}

const Branch = new Peep('Branch', 18, 'Popper', 'hiya');
branch.message();
