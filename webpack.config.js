const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 6464,
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: isDevelopment ? [require.resolve('react-refresh/babel')] : [],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|mp4|ico|mp3|glb|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    sideEffects: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
