const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'note thing';

const addNote = (title, body) => {
        // load parsed object from file
        const notes = loadNotes();
        const duplicateNotes = notes.filter(note => note.title === title);
        if (duplicateNotes.length === 0) {
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
                ? console.log(chalk.bgRed('No note found'))
                : console.log(chalk.bgGreen('note removed'));
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
};
