const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('./data.js')


module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: __dirname + '/src'
        //use: MiniCssExtractPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css"}),
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
}