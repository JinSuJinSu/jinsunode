const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module:{
        rules:[{
            test: /\.css$/i,
            use:['style-loader','css-loader']
        }, {
            test:/\.(png|gif|jpe?g|svg|icon|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        hot: false,
        compress: true
    } 
}