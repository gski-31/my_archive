const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// node app.js add in terminal
// const command = process.argv[2];

// console.log(process.argv);
console.log(yargs.argv);

// if (command === 'add') {
//     console.log('added note')
// } else if (command === 'remove') {
//     console.log('removed note')
// }

// create add command
yargs.command({
        command: 'add',
        describe: 'add a new note',
        handler: () => {
                console.log('added a new note');
        },
});

// create remove command
yargs.command({
        command: 'remove',
        describe: 'remove a note',
        handler: () => {
                console.log('removed a note');
        },
});

// console.log(yargs.argv);
