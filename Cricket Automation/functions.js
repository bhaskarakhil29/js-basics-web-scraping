function sayHello(message) {
    console.log(`I want to say ${message}`);
    return 10;
}
let rVal = sayHello("Something Interesting!");
console.log(rVal);
// Functions are first class citizens.
// Functions are variables.
let greeter = function stat() {
    console.log(`Functions are variables.`)
}
greeter();