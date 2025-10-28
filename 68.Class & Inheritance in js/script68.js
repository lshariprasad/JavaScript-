/* //ES5 Example

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, My Name is " + this.name);
};

var person = new Person("Dev");
console.log(person);

person.sayHello();


//ES6 Example
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("Hello, My Name is " + this.name);
  }
}

var person = new Person("Dev");
console.log(person);
person.sayHello();
 */

/* 
//Inheritance in JavaScript
//ES5 Example

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, My Name is " + this.name);
};

var person = new Person("Dev");
console.log(person);

person.sayHello();

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.construtor = Student;

Student.prototype.eligiblity = function () {
  console.log(
    this.name +
      " age is " +
      this.age +
      " " +
      (this.age >= 18 ? " Eligible " : " Not Eligiable")
  );
};

var student = new Student("Vasavi", 20);
console.log(Student);
student.sayHello();
student.eligiblity();
 */

//ES6 Example
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("Hello, My Name is " + this.name);
  }
}

var person = new Person("Dev");
console.log(person);
person.sayHello();

class Student {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  eligiblity() {
    console.log(
      this.name +
        " age is " +
        this.age +
        " " +
        (this.age >= 18 ? " Eligible " : " Not Eligiable")
    );
  }
}

var student = new Student(" Dev ", 19);
student.sayHello();
student.eligiblity();
