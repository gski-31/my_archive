/* CHALLENGE: Add an option to yargs /
1. Setup a body option for the add command
2. Configure a description, make it required, and for it to be a string
3. Log the body value in the handler function
4. Test your work!
*/

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
                body: {
                        describe: 'note body',
                        demandOption: true,
                        type: 'string',
                },
        },
        handler: argv => {
                console.log(`Title: ${argv.title}\nBody: ${argv.body}`);
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
