function person() {
  console.log(this);
}
console.log(person.name);
console.log(person.toString());
person();
person.call();

//var user_name = "Dev";
function welcome() {
  console.log("Welcome : " + this.user_name);
}

const student = { user_name: "Vasavi" };
welcome.call(student);

function total(eng, mat) {
  console.log(this.name + " got " + (eng + mat) + " Marks ");
}

total(25, 35);
total.call(student, 25, 35);

let subjects = [25, 35];
total.apply(student, subjects);

const fun = total.bind(student, 85, 95);
console.log(fun);
fun();

const person = {
  firstName: "Deva",
  lastName: "krishna",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

const anotherPerson = {
  firstName: "Navya Sri",
  lastName: "Vasavi",
};

console.log(person.fullName.call(anotherPerson));
