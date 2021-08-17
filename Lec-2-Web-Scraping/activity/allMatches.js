let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

function getAllMatches(link) {
  request(link, callBack);
}

function callBack(error, response, html) {
  if (error == null && response.statusCode == 200) {
    parseHTML(html);
  } else if (response.statusCode == 404) console.log("Page Not Found");
  else console.log(error);
}

function parseHTML(html) {
  let ch = cheerio.load(html);
  let allATags = ch(`a[data-hover="Scorecard"]`);
  //   console.log(allATags.length);
  for (let i = 0; i < allATags.length; i++) {
    let link = ch(allATags[i]).attr("href");
    let completeURL = "https://www.espncricinfo.com" + link;
    console.log(completeURL);
  }
}

module.exports = getAllMatches;
