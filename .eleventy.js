const pluginSass = require("eleventy-plugin-sass");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSass, {
    outputDir: "_site/styles",
    remap: true,
    watch: ["**/*.scss", "!node_modules/**"],
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
