const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.wasm/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};