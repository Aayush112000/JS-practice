class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);

  console.log(myCar1.name + " " + myCar2.name)

//   Create a Class method named "age", that returns the Car age:

class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car1("Ford", 2014);

  console.log("My car is " + myCar.age() + " years old.")


//   You can send parameters to Class methods:

class Car2 {
constructor(name, year) {
    this.name = name;
    this.year = year;
}
age(x) {
    return x - this.year;
}
}

const date = new Date();
let year = date.getFullYear();

const myCar3 = new Car2("Ford", 2014);

console.log("My car is " + myCar3.age(2022) + " years old.")
