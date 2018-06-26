console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2];

console.log(`command ${command}`);

if (command === 'add') {
    console.log('adding using notes.js');
} else if (command === 'list') {
    console.log('listing notes');
} else if (command === 'remove') {
    console.log('removing notes');
} else if (command === 'read') {
    console.log('opening up a note for you');
} else {
    console.log(command);
}