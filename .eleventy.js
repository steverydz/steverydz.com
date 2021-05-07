const pluginSass = require("eleventy-plugin-sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const format = require("date-fns/format");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSass, {
    outputDir: "_site/styles",
    remap: true,
    watch: ["**/*.scss", "!node_modules/**"],
  });

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

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
