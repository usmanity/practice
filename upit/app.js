#!/usr/bin/env node

function getText(argv) {
	var userInput = argv.slice(2);
	return userInput.join(' ');
}

function upcase(input) {
	return input.toUpperCase()
}

function print(input) {
	console.log(input);
}

var userText = getText(process.argv);
var upperCaseText = upcase(userText);

print(upperCaseText);
