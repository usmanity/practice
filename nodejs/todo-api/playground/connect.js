const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) throw (err);
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Learn about databases',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) throw (err);
    //     console.log(result);
    // });

    db.collection('Users').insertOne({
        name: 'Muhammad Usman',
        age: 28,
        location: 'San Francisco'
    });

    db.collection('Users').insertOne({
        name: 'Samson',
        age: 2,
        location: 'Backyard'
    });

    db.close();
});

