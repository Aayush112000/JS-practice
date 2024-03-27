// JavaScript Regular Expressions
// A regular expression is a sequence of characters that forms a search pattern.


// Using String search() With a String
let text = "Visit W3Schools!"; 
let n = text.search("W3Schools");
console.log(n)

// Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let l = text.search(/w3schools/i);
console.log(l)

// Using String replace() With a String
let text1 = "Visit Microsoft!";
let result = text1.replace("Microsoft", "W3Schools");
console.log(result)

// Use String replace() With a Regular Expression
let text2 = "Visit Microsoft!";
let result2 = text2.replace(/microsoft/i, "W3Schools");
console.log(result2)

// The exec() method is a RegExp expression method.
// If no match is found, it returns an empty (null) object.
const obj = /e/.exec("The best things in life are free!");
console.log( obj[0])
console.log(obj.index)
console.log(obj.input)

// The test() method is a RegExp expression method.
const pattern = /e/;
console.log(pattern.test("The best things in life are free!"))
