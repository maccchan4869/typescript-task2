const path = require('path');
module.exports = {
    entry: {
        index: './src/index.ts'
    },  
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        contentBase: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}