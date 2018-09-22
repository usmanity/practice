const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Error while logging');
        }
    });
    // res.render('down', {
    //     title: 'Maintenance mode',
    //     message: `We'll be back soon!`
    // });
});

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
