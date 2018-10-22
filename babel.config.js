module.exports = function(api) {
    api.cache(false);
    return {
      "presets": ["react-app", "@babel/preset-flow"],
      "plugins": ["@babel/plugin-transform-flow-strip-types"]
    };
}

