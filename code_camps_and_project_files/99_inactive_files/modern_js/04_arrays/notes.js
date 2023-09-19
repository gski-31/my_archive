/* ---------- Basic Arrays ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// notes.push('new last item')
// notes.pop() // remove last item

// notes.unshift('new first item')
// notes.shift() // remove first item

// notes.splice(1,1);  // where to start, how many to remove
// notes.splice(1, 0, 'insert me');  // where to start, how many to remove, insert soemthing
// notes.splice(1, 1, 'new 2nd item'); // similar to notes[1] = 'new 2nd item'

// console.log(notes);
// console.log(notes.length);
// console.log(notes[notes.length-1]);

/* ---------- forEach ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// notes.forEach((note, index)=>{
//     console.log(`Item ${index+1}: ${note}`);
// })

/* ---------- for loop ------------------ */

// basic info about

/* ---------- search array ------------------ */

// const notes = ['note 01', 'note 02', 'note 03'];

// console.log(notes.indexOf('note 03'));
// console.log(notes.indexOf('02')); // -1

/* ---------- search array of objects ------------------ */

// const notes = [{
//     title: 'note 01',
//     body: 'this is the first note'
// }, {
//     title: 'note 02',
//     body: 'this is the second note'
// }, {
//     title: 'note 03',
//     body: 'this is the third note'
// }];

// const found_index = notes.findIndex((note, index)=>{
//     // console.log(note)
//     return note.body === 'this is the third note'
// })

// console.log(found_index)

/* ---------- search array of objects 2 ------------------ */

// const notes = [{
//     title: 'note 01',
//     body: 'this is the first note'
// }, {
//     title: 'note 02',
//     body: 'this is the second note'
// }, {
//     title: 'note 03',
//     body: 'this is the third note'
// }];

// const findNote = (notes, noteTitle)=> {
//     const index = notes.findIndex((note, index)=>{
//         return note.title === noteTitle
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'note 03')
// const note2 = findNote(notes, 'note 07')
// console.log(note)
// console.log(note2)

/* ---------- find() ------------------ */

// const notes = [{
//     title: 'note 01',
//     body: 'this is the first note'
// }, {
//     title: 'note 02',
//     body: 'this is the second note'
// }, {
//     title: 'note 03',
//     body: 'this is the third note'
// }];

// const findNote = (notes, noteTitle) => {
//     return notes.find((note, index) => {
//         return note.title === noteTitle
//     })
// }

// const note = findNote(notes, 'note 03')
// const note2 = findNote(notes, 'note 07')
// console.log(note)
// console.log(note2)

/* ---------- Filtering Arrays ------------------ */

// const notes = [{
//     title: 'note 01',
//     body: 'this is the first note'
// }, {
//     title: 'note 02',
//     body: 'this is the second note'
// }, {
//     title: 'note 03',
//     body: 'this is the third note'
// }];

// const filteredNotes = notes.filter((note, index) => {
//     return note.title.includes('con') || note.body.includes('con')
// })

// console.log(filteredNotes);

/* ---------- Sorting Arrays ------------------ */

// const notes = [{
//     title: 'X note 01',
//     body: 'this is the first note'
// }, {
//     title: 'F note 02',
//     body: 'this is the second note'
// }, {
//     title: 'A note 03',
//     body: 'this is the third note'
// }];

// const sortNotes = ((notes)=>{
//     notes.sort((a,b)=>{
//         // a first = -1 // b first = 1 // no change = 0
//         if(a.title < b.title){
//             return -1
//         } else if(a.title > b.title){
//             return 1
//         } else {
//             return 0
//         }
//     })
// })

// sortNotes(notes)
// console.log(notes)

// list.sort((a, b) => (a.color > b.color) ? 1 : -1)
