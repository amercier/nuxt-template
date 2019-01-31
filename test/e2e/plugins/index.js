// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// const webpack = require('@cypress/webpack-preprocessor');
const { nuxt } = require('../../../package');

const port = process.env.PORT || (nuxt && nuxt.port) || 3000;

module.exports = (on, config) =>
  // on(
  //   'file:preprocessor',
  //   webpack({
  //     webpackOptions: require('@vue/cli-service/webpack.config'),
  //     watchOptions: {},
  //   }),
  // );

  Object.assign({}, config, {
    baseUrl: `http://localhost:${port}`,
  });
