const superheroes = require('superheroes');
const supervillains = require('supervillains');

const name1 = superheroes.random();
const name2 = supervillains.random();
// const myarr = superheroes.all;

// console.log(name1);
// console.log(name2);
// console.log(myarr);

console.log(`it's the hero ${name1} taking on the villain ${name2}`);
