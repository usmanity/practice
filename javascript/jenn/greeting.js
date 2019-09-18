// takes in a value of timeOfDay as a number, like 1, 4, 12, 21
// doesn't return anything
function greetUser(timeOfDay) {
    if (timeOfDay < 12) {
        console.log("Good morning");
    } else if (timeOfDay > 12 && timeOfDay < 16) {
        console.log("Good afternoon");
    } else {
        console.log("Good evening");
    }
}

// takes no input
// returns only the hour of the day
function getTimeOfDay() {
    var date = new Date();
    date.getHours();
}

// we assign the return value from getTimeOfDay to this variable
var timeRightNow = getTimeOfDay();

// we pass the time of day to greetUser
greetUser(timeRightNow);
