const Sequelize = require('sequelize');
const sequelize = new Sequelize('usman', '', '', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
});

sequelize.sync()
    .then(() => {
        User.create({
            username: 'usmanity',
            birthday: new Date(1990, 5, 12)
        })
        .then( user => {
            console.log(user.toJSON())
        })
    });