const Sequelize = require('sequelize');
const sequelize = new Sequelize('usman', '', '', {
    host: 'localhost',
    dialect: 'postgres'
});

const Book = sequelize.define('book', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    isbn: Sequelize.INTEGER,
});

sequelize.sync()
    .then(() => {
        Book.create({
            title: 'The Prophet',
            author: 'Khalil Gibran',
            isbn: 1234
        }).then(book => {
            console.log(book.toJSON())
        })
    });