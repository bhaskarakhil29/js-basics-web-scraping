let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
const getAllMatches = require("./allMatches");
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
  // fs.writeFileSync("./home.html", html); copies the html file into home.html file.
  let ch = cheerio.load(html);
  let aTag = ch(".widget-items.cta-link a").attr("href");
  // console.log(aTag); =>/series/icc-cricket-world-cup-2019-1144415/match-results
  // https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results
  let completeURL = "https://www.espncricinfo.com" + aTag;
  console.log(completeURL);
  getAllMatches(completeURL);
}
