const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    entry: './src/js/main.js',

    output:{

        path: path.resolve(__dirname,'dist'),
        filename: 'js/main.js'



    },

    devServer:{


        contentBase: './dist'
    },

    plugins:
    [


        new HtmlWebpackPlugin({

            filename:'index.html',
            template: './src/index.html'


        })
    ]
}