const path = require('path')

module.exports={
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude:/node_modules/, use:{loader: 'babel-loader'}},
      {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,use: [{loader: 'url-loader',options: {limit: 10000, name: 'assets/[name].[hash:7].[ext]'}}]},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css', '.scss'],
    alias: {
      "@": path.resolve(__dirname, '../src')
    }
  },
}