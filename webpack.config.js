const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    './src/main.js',
    './sass/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.[hash].js'
  },
  plugins: [
    extractSass,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new FaviconsWebpackPlugin('./src/favicon.png')
  ],
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'data': 'data',
    }
  },
  devServer: {
    contentBase: './dist'
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
