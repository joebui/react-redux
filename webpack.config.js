var config = {
    entry: './main.js',

    output: {
        path: '/dist',
        filename: 'index.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]        
    }
}

module.exports = config;