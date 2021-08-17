console.log("Hello, All :)");

let varName;
varName = 10;
varName = 'This is a String';
console.log(varName);

let number = 21;
for (let i = 2; i * i <= number; i++){
    if (number % i == 0) {
        console.log(`${number} is not a prime`);
        return;
    }
}
console.log(`${number} is prime`);
