const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
// Check for production flag
const PROD = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: './src/client/oppai.js',
  output: {
    path: __dirname,
    filename: 'web/assets/oppai.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /^node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass$/, loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /(\.png|\.svg)$/, loader: 'url-loader'
      }
    ]
  },
  // Only enable minification and NODE_ENV modifications
  // when launched with -p
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js']
  }
};
