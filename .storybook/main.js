const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset",
    path.resolve('./.storybook/addon-gatsby.js')
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {

    config.module.rules.push({
      enforce: "pre",
      test: /\.module\.css$/,
      exclude: [/node_modules/],
      loader: require.resolve("typed-css-modules-loader"),
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];

    return config;
  },
};
