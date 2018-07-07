const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var keepNotes = notes.filter((note) => note.title !== title);
    saveNotes(keepNotes);

    return notes.length !== keepNotes.length;
}

var readNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note) => note.title.toLowerCase() === title.toLowerCase())[0];
    return note;
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote,
}