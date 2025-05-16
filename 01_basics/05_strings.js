/**
 * Basic string operations in JavaScript
 */

// String declaration
const greeting = "Hello, World!";
const name = 'Alice';

// String concatenation
const message = greeting + " My name is " + name + ".";

// Template literals
const templateMessage = `${greeting} My name is ${name}.`;

// String length
const length = greeting.length;

// Accessing characters
const firstChar = greeting[0];

// String methods
const upper = name.toUpperCase();
const lower = greeting.toLowerCase();
const includesHello = greeting.includes("Hello");
const replaced = greeting.replace("World", "JavaScript");

// Output results
console.log(message);
console.log(templateMessage);
console.log(`Length of greeting: ${length}`);
console.log(`First character: ${firstChar}`);
console.log(`Uppercase name: ${upper}`);
console.log(`Lowercase greeting: ${lower}`);
console.log(`Greeting includes 'Hello': ${includesHello}`);
console.log(`Replaced greeting: ${replaced}`);