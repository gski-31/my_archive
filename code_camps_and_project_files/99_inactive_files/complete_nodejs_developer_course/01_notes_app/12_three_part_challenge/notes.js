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

/* CHALLENGE PART 2: Wire up removeNote
1. Load existing notes
2. Use array filter method to remove the matching note (if any)
3. Save the newly created array
4. Test your work with a title that exists and a title that doesn't exist */

/* CHALLENGE PART 3: Use chalk to provide useful logs for remove
1. If a note is removed, print "Note removed!" with a green background
2. If no note is removed, print "No note found!" with a red background
*/
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
