/* class Person {
  constructor(name) {
    this.name = name;
  }
  info() {
    console.log(this.name);
  }
}

const person = new Person("Vasavi");
person.info();
 */

class MyClass {
  static myStaticProperty = "Dev";
  static myStaticMethod() {
    console.log("I am from Static Method");
  }
}

MyClass.myStaticMethod();
console.log(MyClass.myStaticProperty);

// Example 1

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subract(a, b) {
    return a - b;
  }

  static Multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log(MathUtils.add(10, 20));
console.log(MathUtils.subract(10, 20));
console.log(MathUtils.Multiply(10, 20));
console.log(MathUtils.divide(10, 20));

// Example 2 : Singleton Pattern

class Database {
  static instance = null;
  static getInstance() {
    if (Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  query(sql) {}
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2);

//Example 3: Constants

class Colors {
  static RED = "#ff0000";
  static GREEN = "#00ff00";
  static BLUE = "#0d00ffff";
}

console.log(Colors.RED);
console.log(Colors.GREEN);
console.log(Colors.BLUE);
