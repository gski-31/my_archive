const yargs = require('yargs');

yargs.command({
        command: 'add',
        describe: 'add a note',
        builder: {
                title: {
                        describe: 'note title',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                console.log(`Title: ${argv.title}`);
        },
});

yargs.command({
        command: 'remove',
        describe: 'remove a note',
        handler: () => {
                console.log('removed a note');
        },
});

yargs.command({
        command: 'list',
        describe: 'list the notes',
        handler: () => {
                console.log('listed the notes');
        },
});

yargs.command({
        command: 'read',
        describe: 'read the notes',
        handler: () => {
                console.log('read the notes');
        },
});

// console.log(yargs.argv)
yargs.parse();
