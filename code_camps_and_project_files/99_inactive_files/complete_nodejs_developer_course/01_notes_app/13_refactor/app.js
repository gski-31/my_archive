/* CHALLENGE: Wire up list command
1. Create and export listNotes from notes.js
    — "Your notes" using chalk
    — Print note title for each note
2. Call listNotes from command handler
3. Test your work!
*/

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
