// FS => File System Module.
let fs = require("fs");
let cheerio = require("cheerio");

let f1Data = fs.readFileSync("./f1.txt", "utf-8");
// console.log(f1Data);// Displays Buffer's Binary if not specified "utf-8"
// argument above.

let htmlData = fs.readFileSync("./index.html");
// console.log(htmlData + ""); //Becomes String

let ch = cheerio.load(htmlData);

let h1Data = ch("h1");
// Gets all the h1's in the HTML Doc.
// console.log(h1Data);

let firsth1Data = ch(h1Data[0]).text();
console.log(firsth1Data);

let firstParaWithClass = ch(".sample-para").text();
console.log(firstParaWithClass);
