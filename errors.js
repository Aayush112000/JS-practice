// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

try {
    adddlert("Welcome guest!");
}
catch(err) {
    console.log(err.message)
}


// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.



// The throw Statement
// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object:

// try {
//     adddlert("Welcome guest!");
// }
// catch(err) {
//     // console.log(throw "Too big";)
//     throw "Too big Wron";
// }



// HTML Validation
// The code above is just an example.

// Modern browsers will often use a combination of JavaScript and built-in HTML validation, using predefined validation rules defined in HTML attributes:

// <input id="demo" type="number" min="5" max="10" step="1"></input>

// The finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result:
let x = "df "
try { 
    if(x.trim() == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    console.log(err)
  }
  finally {
    console.log("Empty")
  }


//   Error Object Properties

// Property	Description

// name	    Sets or returns an error name
// message	Sets or returns an error message (a string)

// Error Name Values
// Six different values can be returned by the error name property:

// Error Name	    Description

// EvalError	    An error has occurred in the eval() function
// RangeError	    A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	    A syntax error has occurred
// TypeError	    A type error has occurred
// URIError	        An error in encodeURI() has occurred

console.log(eval("4+2*3"))