const path = require('path');

module.exports = {
    entry: './client/src/app.js',
    output: {
        path: path.join(__dirname,'dist/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"], exclude: '/node_modules' }
      ]
    },
    performance: { hints: false },
    performance: { hints: false },
    mode: 'production'
};
