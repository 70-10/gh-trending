"use strict";

const client = require("cheerio-httpcli");

const TrendingURL = "https://github.com/trending";

module.exports = language => {
  language = language.toLowerCase() || "";
  const res = client.fetchSync(`${TrendingURL}/${language}`);
  const $ = res.$;
  const repos = Array.from(
    $("ol.repo-list li").map(function() {
      const name = $("h3 > a", this).text().trim();
      return {
        name,
        url: `https://github.com${$("h3 > a", this).attr("href")}`,
        description: $(".py-1", this).text().trim(),
        language: $("span[itemprop='programmingLanguage']", this).text().trim(),
      };
    })
  );
  return repos;
};
