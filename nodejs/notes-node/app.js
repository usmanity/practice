const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleObj = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};
const bodyObj = {
    describe: "The note's body content",
    demand: true,
    alias: 'b'
};
const argv = yargs.command(
    'add',
    'Add a new note to list of notes',
    {
        title: titleObj,
        body: bodyObj
    }
)
.command(
    'list',
    'List all notes'
)
.command(
    'read',
    'Read a note',
    {
        title: titleObj
    }
)
.command(
    'remove',
    'Delete a note from all notes',
    {
        title: titleObj
    }
)
.help()
.argv;
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        console.log(`${note.title}: ${note.body}`);
    });
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