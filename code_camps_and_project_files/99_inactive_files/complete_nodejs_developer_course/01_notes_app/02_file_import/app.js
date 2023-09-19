// const exported_value = require('./utils');  // load a file from another location

// const sum = exported_value(26, 54);

// console.log(sum);

/* CHALLENGE: Define and use a function in a new file
1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

const notes = require('./notes');

notes();
