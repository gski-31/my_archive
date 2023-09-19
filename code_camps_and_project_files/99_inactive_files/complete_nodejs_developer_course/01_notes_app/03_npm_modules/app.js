// npm init
// install validator
// npm install to reinstall packages

const validator = require('validator');
const notes = require('./notes');

notes();

const email = 'jason.w.g+45623@gmail.com';

console.log(
        validator.normalizeEmail(email, {
                gmail_remove_subaddress: true,
                gmail_remove_dots: true,
        })
);
