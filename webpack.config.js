const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   watch: true,
   devtool: 'source-map',
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: 'dist/'
   },
   devServer: {
      static:{
         directory: path.resolve(__dirname, './dist')
      },
      port: 8000,
      historyApiFallback: true,
      hot: true,
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new webpack.HotModuleReplacementPlugin(),    
      new CleanWebpackPlugin()
   ],
  
};