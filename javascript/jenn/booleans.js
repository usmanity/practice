function isUserEmployed(user) {
    return !!user.isEmployed;
}

var user1 = { isEmployed: true };
var user2 = {
  isStudent: true,
	isEmployed: false
};
var user3 = {
	isStudent: false
};

console.log( isUserEmployed (user1) );
console.log( isUserEmployed (user2) );
console.log( isUserEmployed (user3) );
