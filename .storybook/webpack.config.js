const {omit,merge} = require("lodash");
const baseConfig = require("../webpack.config");

module.exports = ({ config, mode }) => {
  const bConfig = baseConfig();
  const merged = Object.assign({},config,{
    module: bConfig.module,
    externals: bConfig.externals,
    plugins: bConfig.plugins.concat(config.plugins),
  });
  return merged;
};
