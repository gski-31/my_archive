/* CHALLENGE: Wire up read command 
1. Setup --title option for read command
2. Create readNote in notes.js
    - Search for note by title
    - Find note and print title (styled) and body (plain)
    - No note found? Print error in red.
3. Have the command handler call the function
4. Test your work by running a couple commands 
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

yargs.command({
        command: 'list',
        describe: 'list all notes',
        handler: () => {
                notes.listNotes();
        },
});

yargs.command({
        command: 'read',
        describe: 'read a note',
        builder: {
                title: {
                        describe: 'read this',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                notes.readNote(argv.title);
        },
});

yargs.parse();
