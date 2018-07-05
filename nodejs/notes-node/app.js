const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = process.argv[2];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note already exists with this title");
    }
    
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : `Note with '${argv.title}' not found`;
    console.log(message);
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    console.log(`Trying to open "${argv.title}"\n----`);
    console.log(`Note title: ${note.title}`);
    console.log(`Note body: ${note.body}`);
} else {
    console.log(command);
}