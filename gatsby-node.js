/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  /**
   * Generate css types on save so that our css types are in
   * sync with what typescript needs.
   */
  config.module.rules.push({
    enforce: "pre",
    test: /\.module.css$/,
    exclude: [/node_modules/],
    use: [require.resolve("typed-css-modules-loader")],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    "@/components": path.resolve(__dirname, "src/components"),
    components: path.resolve(__dirname, "src/components"),
    styles: path.resolve(__dirname, "src/styles"),
  };

  actions.replaceWebpackConfig(config);
};
