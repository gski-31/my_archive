const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

// [x] add note
// remove note
// list all notes
// read note

const addNote = (title, body) => {
        const notes = loadNotes();
        const noteCheck = notes.find(note => note.title === title);
        if (!noteCheck) {
                notes.push({ title, body });
                saveNotes(notes);
                console.log(chalk.green.inverse('note saved'));
        } else {
                console.log(chalk.red.inverse('that title already exists'));
        }
};

const removeNote = title => {
        const notes = loadNotes();
        const newNotes = notes.filter(note => note.title !== title);
        newNotes.length === notes.length ? console.log(chalk.red.inverse('no such note')) : saveNotes(newNotes),
                console.log(chalk.green.inverse('note removed'));
};

const listNote = () => {
        const notes = loadNotes();
        console.log('-----------------');
        console.log('your notes:');
        console.log('-----------------');
        notes.forEach(note => {
                console.log(note.title);
                console.log(note.body);
                console.log('-----------------');
        });
};

const readNote = title => {
        const notes = loadNotes();
        const foundNote = notes.find(note => note.title === title);
        if (foundNote) {
                console.log(foundNote.title);
                console.log(foundNote.body);
        } else {
                console.log(chalk.red.inverse('nope'));
        }
};

const loadNotes = () => {
        try {
                return JSON.parse(fs.readFileSync('./notes.json').toString());
        } catch (err) {
                return [];
        }
};

const saveNotes = notes => {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
        addNote,
        removeNote,
        listNote,
        readNote,
};
