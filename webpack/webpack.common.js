const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports={
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude:/node_modules/, use:{loader: 'babel-loader'}},
      {test: /\.css$/,  use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},]},
      {test: /\.scss$/, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'sass-loader'}]},
      {test: /\.less$/, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'less-loader'}]},
      {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,use: [{loader: 'url-loader',options: {limit: 10000}}]},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/index.html"),
      filename: "index.html"
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/test.html"),
      filename: "test.html"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    proxy: {'/api': 'http://localhost:3000'},
    hot: true,
    historyApiFallback: true,
    port: 9966,
    
  }
}