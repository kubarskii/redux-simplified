const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: 'redux-simplified',
        libraryTarget: "umd2"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    },
                    {loader: 'ts-loader'}
                ]
            },
        ]
    },
    target: 'node'
}
