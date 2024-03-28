import { WebpackEnv } from "./webpack/types/env";
import { defineConfig } from "cypress";

export default defineConfig({
  env: { FOO: "dev" },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: "./webpack/webpack.config.ts",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
