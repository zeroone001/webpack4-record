const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (p) => {
    return path.resolve(__dirname, '../', p);
};

module.exports = {
    mode: 'development',
    entry: resolve('src/index.js'),
    output: {
        filename: '[name].[hash:7].js', // 打包后的文件名称
        path: resolve('dist')
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
