// document.body.onload(alert('Hello'));

document.querySelector('.change_me').innerHTML = "i've been swapped in JS";

// challenge change 3rd li text
const elThree = document.querySelector('ul li:nth-child(3)'); // nth is a callback, not the item
const elFour = document.getElementsByTagName('li')[3]; // 0 value based
elThree.innerHTML = 'we shall see';
elThree.classList.add('red');
elFour.innerHTML = 'i am fourth';

document.querySelector('p').style.fontSize = '1.5rem';
document.querySelector('h1').classList.add('huge');
