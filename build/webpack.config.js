const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (p) => {
    return path.resolve(__dirname, '../', p);
};
// console.log('process', process.argv.slice(2));
const argv = require('yargs').argv;
console.log('argv', argv);
// const a = process.env.npm_config_env;
let arr = glob.sync(resolve('src/js/**/*.js'));
arr = arr.reduce(function(newArr, p) {
    let index = path.relative(resolve('src/js'), p);
    index = index.replace(/\.js$/, '');
    newArr[index] = p;
    return newArr;
}, {});
console.log('arr', arr);
module.exports = {
    mode: 'development',
    entry: arr,
    output: {
        filename: '[name].[hash:7].js', // 打包后的文件名称
        path: resolve('dist'),
        publicPath: './',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        // 可以指明存放第三方模块的绝对路径，以减少寻找
        modules: ['node_modules'],
        alias: {
            'src': resolve('src')
        },
        extensions: ['.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src/tpl/index.html')
        })
    ]
};
