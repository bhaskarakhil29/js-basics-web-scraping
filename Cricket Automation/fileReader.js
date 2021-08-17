let fs = require("fs");

let content = fs.readFileSync("f1.txt");
console.log(`The content in f1 is ${content}`);