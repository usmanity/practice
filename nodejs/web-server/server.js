const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home', {
        welcome: 'Hey there, welcome to this website',
        title: 'Homepage',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        year: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Error handling request'
    })
})

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});
