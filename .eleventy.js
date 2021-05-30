const pluginRss = require("@11ty/eleventy-plugin-rss");
const format = require("date-fns/format");
const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addFilter("short_date", (value) => {
    return format(value, "dd MMM");
  });

  eleventyConfig.addFilter("long_date", (value) => {
    return format(value, "dd MMMM y");
  });

  eleventyConfig.addFilter("year", (value) => {
    return format(value, "y");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yyyy-LL-dd");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
