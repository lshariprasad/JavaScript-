// CallBack Function //

function myCallback() {
  console.log("I am a callback function");
}

function higherOrderFunction(fun) {
  fun();
}
higherOrderFunction(myCallback);

// setTimeout(function,1000);

setTimeout(function () {
  console.log("Hello World");
}, 3000);

setInterval(function () {
  console.log("Hello Dev");
}, 3000);

const numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number);
});
