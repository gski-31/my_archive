/* CHALLENGE: Wire up read command 
1. Setup --title option for read command
2. Create readNote in notes.js
    - Search for note by title
    - Find note and print title (styled) and body (plain)
    - No note found? Print error in red.
3. Have the command handler call the function
4. Test your work by running a couple commands 
*/

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'note thing';

const addNote = (title, body) => {
        // load parsed object from file
        const notes = loadNotes();
        // const duplicateNotes = notes.filter((note) => note.title === title)
        // find method
        const duplicateNote = notes.find(note => note.title === title);
        if (!duplicateNote) {
                notes.push({
                        title,
                        body,
                });
                saveNotes(notes);
                console.log(chalk.green.inverse('note added'));
        } else {
                console.log(chalk.red.inverse('note title exists'));
        }
};

const removeNote = title => {
        // load parsed object from file
        const notes = loadNotes();
        const newNotes = notes.filter(note => note.title !== title);
        saveNotes(newNotes);
        newNotes.length === notes.length
                ? console.log(chalk.red.inverse('No note found'))
                : console.log(chalk.bgGreen('note removed'));
};

const listNotes = () => {
        const notes = loadNotes();
        console.log(chalk.red.inverse('Your Notes:'));
        notes.forEach(note => {
                console.log(note.title);
        });
};

const readNote = title => {
        const notes = loadNotes();
        const note = notes.find(note => note.title === title);
        if (note) {
                console.log(chalk.red.inverse(note.title));
                console.log(note.body);
        } else {
                console.log(chalk.red.inverse('note not found'));
        }
};

// load file, if no file create an empty array
const loadNotes = () => {
        try {
                // get JSON notes file and convert to string
                const dataJSON = fs.readFileSync('notes.json').toString();
                // parse JSON file
                return JSON.parse(dataJSON);
        } catch (err) {
                return [];
        }
};

const saveNotes = notes => {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
        getNotes,
        addNote,
        removeNote,
        listNotes,
        readNote,
};
