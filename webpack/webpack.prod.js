const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig={
  mode: 'production',
  module: {
    rules: [
      {test: /\.css$/,  use: [MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},]},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'sass-loader'}]},
      {test: /\.less$/, use: [MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},{loader:'postcss-loader'},{loader:'less-loader'}]},
    ]
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all' //1.
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:  'css/[name].[hash].css',
    }),
    // new BundleAnalyzerPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/index.html"),
      filename: "index.html"
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"../src/test.html"),
      filename: "test.html"
    }),
    new CleanWebpackPlugin([path.resolve(__dirname,'../dist/*')],{allowExternal:true})
  ],
}

module.exports = merge(commonConfig, prodConfig)