const name = 'jason gralinski';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.includes('s'));

/* CHALLENGE: validate a password 
• longer than 8 and does not contain 'password'
*/

const isValidPassword = password => password.length >= 8 && !password.includes('password');

console.log(isValidPassword('mypassword'));
console.log(isValidPassword('mydrowssap'));
