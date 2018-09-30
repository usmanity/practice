const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if email exists
    db.saveUser({email, password});
    // send that welcome email
};
