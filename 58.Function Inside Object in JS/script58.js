/* const object = {
  name: "Dev",
  age: 25,

method: function () {
    console.log("I am Method");
  }, 

 method() {
    console.log("I am Method");


  method: () => {
    console.log("I am Method");
  },
};
console.log(object);
console.log(object.name);
object.method(); */

/* console.log(this);

var age = 25;

function info() {
  console.log(this.age);
  console.log(this);
}
window.info();

const user = {
  age: 45,
  fun: info,
  nested: {
    age: 50,
    fun: info,
  },
};
user.fun();
console.log(this.info);
user.nested.fun();
 */
var age = 19;
var age = 19;

const student = {
  age: 25,
  fun1: function () {
    console.log("Fun 1:", this.age); // 25
    console.log("Fun 1 this:", this); // student object

    function fun2() {
      console.log("Fun 2:", this.age); // 19 (global var)
      console.log("Fun 2 this:", this); // global object (window)
    }

    fun2();

    const fun3 = () => {
      console.log("Fun 3:", this.age); // 25
      console.log("Fun 3 this:", this); // same as fun1’s this (student)
    };

    fun3();
  },
};

student.fun1();

const fun4 = () => {
  console.log("Fun 4:", this.age);
  console.log("Fun 4 this:", this);
};

fun4();
