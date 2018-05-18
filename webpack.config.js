const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  resolve,
} = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: [resolve(__dirname, './src/index.jsx')],
  output: {

    filename: 'app.js',
    path: resolve(__dirname, 'build'),

  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: resolve(__dirname, 'src/'),
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]',
            /*   outputPath: 'img/' */
            // publicPath: 'img/'
          },
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: resolve(__dirname, 'build/'),
    inline: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html',
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
  ],
};
