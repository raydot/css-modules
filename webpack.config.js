const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
        //use: MiniCssExtractPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css"})
  ]
}