module.exports = function(config) {

  // just pass these things through to the dist folder
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("_redirects");

  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },

    // some handy options
    templateFormats : ["njk", "md"],
    passthroughFileCopy: true

  };
};
