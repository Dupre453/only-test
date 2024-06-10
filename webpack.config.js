const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
               use: {
                   loader: "babel-loader",
                   options: {
                       presets: [
                           '@babel/preset-env',
                           '@babel/preset-react',
                           '@babel/preset-typescript'
                       ],
                   }
               }
            },
            {
                test: /\.(css|sass|scss)$/,
                /*exclude: /node_modules/,*/
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {

            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};