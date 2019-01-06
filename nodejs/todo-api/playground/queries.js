const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/user');

var id = '5c325113d0354ce0203d0832';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(todo);
});

Todo.findById(id).then((todo) => console.log(todo));

var userId = '5c31234392665819cbcc373e'

User.findById(userId).then((user) => {
    console.log(user);
}, (e) => console.log(e));
