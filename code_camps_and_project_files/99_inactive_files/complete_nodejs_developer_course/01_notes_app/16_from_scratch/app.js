const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

// add note
// remove note
// list all notes
// read note

yargs.command({
        command: 'add',
        describe: 'add a note',
        builder: {
                title: {
                        describe: 'add a title',
                        demandOption: true,
                        type: 'string',
                },
                body: {
                        describe: 'add body content',
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
                        describe: 'remove a title',
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
        describe: 'list the notes',
        handler: () => {
                notes.listNote();
        },
});

yargs.command({
        command: 'read',
        describe: 'find a note',
        builder: {
                title: {
                        describe: 'find a title',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                notes.readNote(argv.title);
        },
});

yargs.parse();
