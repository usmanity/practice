const express = require('express');
const fs = require('fs');

const app = express();

app.get('/size', (req, res) => {
    let hashes = JSON.parse(fs.readFileSync('./hashes.json', 'utf8'));
    let duplicates = fs.readFileSync('./duplicates.txt', 'utf8');

       res.send({
         currentSize: hashes.length,
         time: new Date(),
         duplicates,
       });
});

app.listen(5051);
