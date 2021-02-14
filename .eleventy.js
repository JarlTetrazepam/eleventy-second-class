const  fs = require("fs");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");    //adds assets and css folder to be processed by 11ty
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addFilter("toUTC", function(date) {
        return date.toUTCString().substring(0, date.toUTCString().lastIndexOf(" ")) + " UTC";   //timeDate is usually displayed as local TZ, this fixes that
    });
  };