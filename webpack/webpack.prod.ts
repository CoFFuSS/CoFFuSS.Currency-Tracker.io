/* eslint-disable import/no-extraneous-dependencies */
import CompressionPlugin from 'compression-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type { JsMinifyOptions as SwcOptions } from '@swc/core';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import zlib from 'zlib';
import path from 'path';

import { ENV_MODE_MAP, PATHS } from './common/constants';
import { RuleBuilder } from './builders/rule';
import { PluginBuilder } from './builders/plugin';
import { ConfigFunc } from './types/env';

const prodConfig: ConfigFunc<'prod'> = ({ env }) => {
  const envMode = ENV_MODE_MAP[env];

  return {
    mode: envMode,
    devtool: 'source-map',
    output: {
      path: PATHS.output,
      filename: '[name].[contenthash:8].js', // contenthash-this is version for avoding browser-cache issue: user always has to get the last version of files
      chunkFilename: '[name].[contenthash:8].js',
      clean: true,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin<SwcOptions>({
          test: /\.m?js(\?.*)?$/i,
          // exclude: /\.m?js(\?.*)?$/i, // uncomment if we don't need uglifying (for debug purpose)
          minify: TerserPlugin.swcMinify,
          extractComments: false, // disable extracting comments to a different file
          parallel: 4,
          terserOptions: {
            toplevel: true, // https://github.com/terser/terser#minify-options
            format: {
              comments: false, // remove comments from files
            },
            mangle: {
              safari10: true, // for preventing Safari 10/11 bugs in loop scoping and await
            },
            compress: {
              unused: true,
              pure_funcs: ['console.info', 'console.debug', 'console.warn'],
            }, // remove this functions when their return values are not used
          },
        }),
      ],
      splitChunks: {
        chunks: 'async',
        minSize: 25600,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            chunks: 'all',
            name: 'node-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            chunks: 'async',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        RuleBuilder.createBabelTsRule(),
        RuleBuilder.createStylesRule(MiniCssExtractPlugin.loader),
      ],
    },
    plugins: [
      PluginBuilder.createProcessEnvVariablesPlugin({ env: envMode }),
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: zlib.brotliCompress,
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          level: 11,
        },
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),

      new ForkTsCheckerWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(PATHS.public, `mockServiceWorker.js`),
            to: path.resolve(PATHS.output),
          },
          {
            from: path.resolve(PATHS.public, 'locales'),
            to: path.resolve(PATHS.output, 'locales'),
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
  };
};

export default prodConfig;
