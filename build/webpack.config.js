const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: '[name].[hash:7].js', // 打包后的文件名称
        path: path.resolve(__dirname, '../dist')
    }
};
