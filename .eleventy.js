module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toUTC", function(date) {
        return date.toUTCString().substring(0, date.toUTCString().lastIndexOf(" ")) + " UTC";
    });
  };