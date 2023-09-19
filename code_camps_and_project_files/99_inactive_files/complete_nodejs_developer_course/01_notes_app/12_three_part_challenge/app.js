const yargs = require('yargs');
const chalk = require('chalk');

const notes = require('./notes.js');

yargs.command({
        command: 'add',
        describe: 'add a note',
        builder: {
                title: {
                        describe: 'note title',
                        demandOption: true,
                        type: 'string',
                },
                body: {
                        describe: 'note body',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                notes.addNote(argv.title, argv.body);
        },
});

/* CHALLENGE PART 1: Setup command option and function
1. Setup the remove command to take a required "--title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using: node app.js remove --title="some title"
*/
yargs.command({
        command: 'remove',
        describe: 'remove a note',
        builder: {
                title: {
                        describe: 'removed title',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                notes.removeNote(argv.title);
        },
});

yargs.parse();
