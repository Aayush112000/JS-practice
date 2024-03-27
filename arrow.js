let myFunction = (a, b) => a * b;
console.log(myFunction(3,4))

// With Arrow Function:
hello = () => "Hello World!"
// Note: This works only if the function has only one statement.

// or
// hello = () => {
//     return "Hello World!";
//   }
  
console.log(hello())

// If you have parameters, you pass them inside the parentheses:

hello = (val) => "Hello " + val;
console.log(hello("sade"))

// In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;
console.log(hello(5))
