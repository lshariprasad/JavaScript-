//Creating Object in JS

//1.Using Object literals :

/* const person = {
  name: "Sri",
  age: 19,
  job: "Developer",
};
console.log(person); */

//2.Using the object constructor:

/* const person = new Object();
(person.name = "Dev"), (person.age = 19), (person.job = "Developer");
console.log(person);
 */

//3.Using the object.create() method:
// Object.create(prototype, propertiesObject);

/* const personProto = {
  sayHello: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};

const person = Object.create(personProto);
person.name = "Dev";
person.age = 19;
person.job = "Developer";
console.log(person);
console.log(person.sayHello);
console.log(person.sayHello());
person.sayHello();
 */

//4.Using Class:
/* class person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new person("Vasavi", 19, "Developer");
console.log(person); */
