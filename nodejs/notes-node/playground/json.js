// var obj = {
//     name: 'Samson',
//     cute: true,
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);

// console.log(stringObj);

// var personString = '{"name": "Samson", "age": 1}';

// var person = JSON.parse(personString);

// console.log(personString);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Untitled Note',
    body: 'Something original here'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// convert back to obj -> note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);