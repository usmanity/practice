/**
 * returns a hello greeting
 * @param person a person object
 */
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName + ".";
}
var user = {
    firstName: "Muhammad",
    lastName: "Usman"
};
console.log(greeter(user));
