module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'NYT Sample App'
        },
        // Target specific browsers with babel-preset-env
        targets: {
          browsers: [
            'last 1 Chrome versions',
            'last 1 Firefox versions'
          ]
        },
        // Add additional Babel plugins, presets, or env options
        babel: {
          // Override options for babel-preset-env:
          plugins: [
            ["module-resolver", {
              "extensions": [".js", ".jsx", ".es", ".es6", ".mjs"],
              "root": ["./src"],
              "alias": {
                "test": "./test",
              }
            }]
          ]
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
