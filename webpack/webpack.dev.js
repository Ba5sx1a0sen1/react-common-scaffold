const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.js')

const devConfig={
  mode: 'development',
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {test: /\.css$/,  use: ['style-loader' ,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},]},
      {test: /\.scss$/, use: ['style-loader' ,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'sass-loader'}]},
      {test: /\.less$/, use: ['style-loader' ,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'less-loader'}]},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/index.html"),
      filename: "index.html"
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/test.html"),
      filename: "test.html"
    })
  ],
  devServer: {
    proxy: {'/api': 'http://localhost:3000'},
    hot: true,
    historyApiFallback: true,
    port: 9966,
    overlay: true,
  }
}

module.exports = merge(commonConfig, devConfig)