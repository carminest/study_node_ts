const path = require('path');

module.exports={
    mode: 'production', // or "development" or "none"
    entry: './src/index.js',

    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
      },
    resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
    },
};