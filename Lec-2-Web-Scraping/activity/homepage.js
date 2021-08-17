let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let link =
  "https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415";

request(link, callBack);

function callBack(error, response, html) {
  if (error == null && response.statusCode == 200) {
    parseHTML(html);
  } else if (response.statusCode == 404) console.log("Page Not Found");
  else console.log(error);
}

function parseHTML(html) {
  // fs.writeFileSync("./home.html", html);
  let ch = cheerio.load(html);
  let allResultsClass = ch(".widget-items.cta-link a").attr("href");
  console.log(allResultsClass);
}
