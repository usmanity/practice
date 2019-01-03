const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) throw (err);
    console.log('Connected to MongoDB server');

    db.collection('Todos').deleteMany({ text: 'Learn about databases' }).then((docs) => {
        console.log(docs);
    }, (err) => console.log(err)).then(() => db.close());
});

