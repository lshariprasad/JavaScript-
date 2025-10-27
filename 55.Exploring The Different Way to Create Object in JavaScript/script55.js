const student = {
  full_Name: "Dev",
  age: 19,
  address: "Mangadu",
  city: "Chennai",
  about: function () {
    return `${this.full_Name} is from ${this.city}`;
  },
  eligiblity: function () {
    return this.age >= 18;
  },
};

console.log(student);
console.log(student.about());

function addStudent(full_Name, age, address, city) {
  const user = {};
  user.full_Name = full_Name;
  user.age = age;
  user.address = address;
  user.city = city;
  user.about = function () {
    return `${this.full_Name} is from ${this.city}`;
  };
  user.eligiblity = function () {
    return this.age >= 18;
  };
  return user;
}

console.log(addStudent("Vasavi", 19, "Mangadu", "Chennai"));
