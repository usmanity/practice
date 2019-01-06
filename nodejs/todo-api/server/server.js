const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todos');
const { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos,
            length: todos.length
        });
    }, e => res.send(e));
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    Todo.findById(id).then((todo) => {
        console.log(todo);
        res.send(todo);
    }, (err) => {
        res.status(404).send('ID not found');
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

module.exports = { app };
