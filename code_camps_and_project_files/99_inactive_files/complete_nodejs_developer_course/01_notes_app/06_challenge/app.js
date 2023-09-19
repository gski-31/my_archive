/* CHALLENGE: Add 4 yargs commands
1. Recreate "add" and "remove" commands
2. Setup command to support "list" command (print placeholder message for now)
3. Setup command to support "read" command(print placeholder message for now)
4. Test your work by running both commands and ensure correct output
*/

const yargs = require('yargs');

yargs.command({
        command: 'add',
        describe: 'add a note',
        handler: () => {
                console.log('added a note');
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

console.log(yargs.argv);
