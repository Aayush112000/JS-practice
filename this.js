const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())

let x = this;
console.log(x)

// avaScript strict mode does not allow default binding.

// So, when used in a function, in strict mode, this is undefined.

// "use strict";
// console.log(myFunction());
// function myFunction() {
//   return this;
// };



// In these examples, this is the person object:

const person10 = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
      return this;
    }
};

console.log(person10.myFunction())


// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.

// See Also:
// The Function call() Method

// The Function apply() Method

// The Function bind() Method

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  let x1 = person1.fullName.call(person2);
  console.log(x1)

//   Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

const person5 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person5.fullName.bind(member);

  console.log(fullName())

// This Precedance

// Precedence	Object

// 1	        bind()
// 2	        apply() and call()
// 3	        Object method
// 4	        Global 




// For import

export function myFunction() {
  console.log("Hello from myFunction!");
}