const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            //Here are the loaders
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test:/\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 1000000,
                    }
                }
            },
            {
                test:/\.(mp4|webm)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 1000000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
        //Here are the plugins 
    ]
}