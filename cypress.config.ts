import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  env: { FOO: 'dev' },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: './webpack/webpack.config.ts',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
