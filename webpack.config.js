const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/container.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: 'container.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|build)/,
            use: {
		  loader: 'babel-loader',
		  options: {
		    presets: ['@babel/preset-env']
		  }
		}
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader','postcss-loader']
            }
        ]
    },
    externals: {
    'react': 'commonjs react' 
  }
};
