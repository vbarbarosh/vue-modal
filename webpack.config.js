function render_config(mode)
{
    // noinspection EqualityComparisonWithCoercionJS
    const is_development = (mode == 'development');

    return {
        mode,
        entry: './src/vue_modal.js',
        devtool: false,
        output: {
            filename: is_development ? 'vue-modal.js' : 'vue-modal.min.js',
            library: 'vue_modal',
            libraryExport: 'default',
        },
        externals: {
            bluebird: 'Promise',
            jquery: 'jQuery',
            vue: 'Vue',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                },
            ],
        },
    };
}

// noinspection WebpackConfigHighlighting
module.exports = [
    render_config('development'),
    render_config('production'),
];
