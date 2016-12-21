var config = {
    entry: {
        js: ['babel-polyfill', './src/index.js']        
    },

    output: {
        path: '/dist',
        filename: 'index.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]        
    }
}

module.exports = config;