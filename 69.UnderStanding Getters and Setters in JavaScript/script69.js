//Example - 1 : Getters and Setters with Object Literals
/* 
const person = {
  firstName: "Dev",
  lastName: "Krishna",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person);
console.log(person.firstName);
person.firstName = "Sri";
console.log(person.fullName);
person.fullName = "Navya Sri Vasavi";
console.log(person.fullName);
 */

/* 
class person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const p1 = new person("Dev", "Sri");
console.log(p1);
console.log(p1.fullName);
p1.fullName = "Hari Prasad";
console.log(p1.fullName);
 */

/* 
1. Create a Class Called Circle.
2. Radius Values a Constructor
3. Getter and Setter Function called Diameter
4. Getter area()
*/
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);
myCircle.diameter = 12;
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area);
