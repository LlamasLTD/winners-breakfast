const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: ['./client/index.js', 'webpack-hot-middleware/client']
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    output: {
        filename: 'scripts/client.js',
        path: path.resolve(__dirname, 'public')
    }
};