// swap variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// how many chars are left?
const textText = prompt('enter text here');
alert(`you have typed ${textText.length} characters and have space for ${240 - textText.length} more`);

// limit to 140
const testText = prompt('enter text here');
alert(`${testText.slice(0, 140)}`);

// ask for name and convert to proper syntax
let name = prompt('type your name');
name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
console.log(name);

// dog age to human age
const dogAge = prompt('who old is your dog?');
const humanAge = (dogAge - 2) * 4 + 21;
alert(`your dog would be ${humanAge} in human years`);

// move Karel from corner to corner on 5*5 at http://stanford.edu/~cpiech/karel/ide.html
function main() {
        moveFour();
        turnLeft();
        moveFour();
        turnRight();
}

function moveFour() {
        move();
        move();
        move();
        move();
}

// have Karel draw a diagonal line on 5*5 at http://stanford.edu/~cpiech/karel/ide.html
function main(){
    putBeeper();
    dropBeeper();
    dropBeeper();
    dropBeeper();
    dropBeeper();
}
 
 function dropBeeper(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }

 // make function to find MAX purchase
 function getSoda(dollar){
     console.log(`you can purchase ${Math.floor(dollar / .75)} cans of soda`)
 }

 getSoda(26.55);

 // make a basic life in weeks function, skipping leap years and rounding to age not exact date
 function lifeInWeeks(age){
     console.log(`you are ${age * 52} weeks old`)
 }

 lifeInWeeks(10)

  // make function to find MAX purchase and give change
  function getChange(dollar){
    console.log(`you will get ${(dollar%.75).toFixed(2)} back after purchasing ${Math.floor(dollar / .75)} cans of soda`)
}

getChange(26.55);

// create an Imperial BMI = weight * 703 dived by height in inches squared
function yourBMI(weight, height){
    console.log(`you're BMI is ${((weight * 703)/ (Math.pow(height, 2))).toFixed(2)}`)
}

yourBMI(177, 71)