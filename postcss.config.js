module.exports = {
  // You can specify any options from https://postcss.org/api/#processoptions here
  // parser: 'sugarss',
  plugins: [
    // Plugins for PostCSS
    ["postcss-short", { prefix: "x", skip: "_" }],
    "postcss-preset-env",
  ],
};
