const aekWebpackConfig = require("@ombiel/aek-webpack");

module.exports = function() {

  const config = aekWebpackConfig({
    babelConfig: require.resolve("@ombiel/babel-preset-aek/without-lodash"),
  });

  // customise `config` here
  // https://webpack.js.org/configuration/

  config.externals = Object.assign(
    {},
    config.externals,
    require("@ombiel/cm-tile-sdk/webpack-externals"),
  );

  return config;
};
