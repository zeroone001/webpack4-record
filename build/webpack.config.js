const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (p) => {
    return path.resolve(__dirname, '../', p);
};
let arr = glob.sync(resolve('src/js/**/index.js'));
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
        publicPath: './'
    },
    module: {
        rules: [
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
