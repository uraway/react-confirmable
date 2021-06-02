module.exports = ({ config }) => {
  config.plugins.pop()
  return config;
};
