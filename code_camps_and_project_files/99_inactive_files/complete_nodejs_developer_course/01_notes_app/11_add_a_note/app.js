const yargs = require('yargs');

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

yargs.parse();
