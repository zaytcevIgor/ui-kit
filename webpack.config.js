const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
      },

      plugins: [new HtmlWebpackPlugin({
          template: './src/index.pug'
      }), new MiniCssExtractPlugin()],
        

      module: {
          rules: [
            {
                test: /\.pug$/i,
                loader: "pug-loader",
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
            },
            
            {
                test: /\.css$/i,
                use:  [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            }
          ]
      }
}