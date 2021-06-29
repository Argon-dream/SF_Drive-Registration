const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"}),
              new MiniCssExtractPlugin()],
    devServer: {
        contentBase: "./dist",
        port: 4200,
        stats: {
            children: false,
            maxModules: 0
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './'
                    }
                },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
}