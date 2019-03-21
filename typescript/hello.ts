/**
 * returns a hello greeting
 * @param person a person object
 */
function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}.`
}

interface Person {
    firstName: string,
    lastName: string,
}

var user = {
    firstName: "Muhammad",
    lastName: "Usman"
}

console.log(greeter(user));
