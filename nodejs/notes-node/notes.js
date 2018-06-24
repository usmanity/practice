console.log('starting notes.js');

module.exports.addNote = () => {
    console.log('Adding note');
    return 'new note';
};

module.exports.add = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
}