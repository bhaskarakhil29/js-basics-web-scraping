// console.log("Hello World");

let i = 10;
let classString = "asdakldnadkf";
let isAllowed = true;
let thatDate = Date();
// console.log(thatDate, isAllowed, i, classString);

const PI = 3.14;
// PI = 3.142; //Invalid
// console.log(PI);

// array
const f = [12, 14.23, "asdjsgndjfa", true, ["aslkd", 122, false]];
// console.log(f);

// objects => key:value
let obj = {
  id: 1,
  name: "ansjfkbadjf",
  movies: ["ss", "sm", "sb", "sk"],
};
// console.log(obj);

// Dot notation => literal match of the key
// console.log(obj.id);
let key = "name";
// console.log(obj.key); // Gives undefined because it searches for the key attribute in the obj. Not the id.j

// Bracket Notation
// console.log(obj[key]);

// Functions.
function sayHi() {
  console.log(`Hi`);
}

// sayHi();

// Functions are variables.
const sayHello = function (name) {
  console.log(`Hello, ${name}`);
};

// sayHello("Akhil");

// Higher order Functions (Functions that accepts or returns another function)
function sayNamasthe(func) {
  console.log("In Namasthe Block, Namasthe");
  func();
}

function myFunc() {
  console.log("Someone called me !");
}

// sayNamasthe(myFunc);

// Callback Func(Function which are passed as an argument)
// Above myFunc is callback and sayNamasthe is a higher order function.

function getFirstName(name) {
  return name.split(" ")[0];
}
function getLastName(name) {
  return name.split(" ")[1];
}
function funcNames(name, saySome) {
  console.log(saySome(name));
}
funcNames("Bhaskar Akhil", getFirstName);
funcNames("Bhaskar Akhil", getLastName);
