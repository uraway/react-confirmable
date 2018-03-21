/* eslint-disable no-param-reassign, global-require */

module.exports = baseConfig => {
  // Replace storybook baseConfig rule.
  baseConfig.module.rules.splice(0, 1, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['./babel.config.js'],
        },
      },
    ],
  });

  return baseConfig;
};
