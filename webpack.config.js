const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    oppai: [
      path.resolve(__dirname, 'src/client/oppai.js'),
      path.resolve(__dirname, 'src/client/styles/main.sass'),

    ],
  },

  mode: process.env.NODE_ENV,

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: './src/client/index.html',
      to: '.',
    }]),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: 'url-loader',

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.sass$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'],
      },
    ],
  },
};
