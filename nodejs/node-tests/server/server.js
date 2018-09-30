const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users', (req, res) => {
    res.status(200).json([{
        firstName: 'Muhammad',
        age: 28,
    },
    {
        firstName: 'Heisenberg',
        age: 6,
    },
    {
        firstName: 'Samson',
        age: 1
    }
]);
});

app.listen(3000);


module.exports.app = app;
