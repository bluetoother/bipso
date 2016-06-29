var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    validator = require('webpack-validator');

var parts = require('./lib/parts'); // separated plugins
var config = {};                    // config for our app

var PATHS = {
    app: path.join(__dirname, 'app'),                       // app folder: source code
    build: path.join(__dirname, 'build'),                   // build folder: bundle code
    style: [
        // path.join(__dirname, 'node_modules', 'purecss'), // include css framework here if any
        path.join(__dirname, 'app', 'styles', 'main.css'),  // our app css, it is at /app/styles
        path.join(__dirname, 'app', 'styles', 'markdown.css'),
        path.join(__dirname, 'app', 'styles', 'charTable.css')
    ], 
    docs: path.join(__dirname, 'app', 'docs'),
    img: path.join(__dirname, 'app', 'img')
};

/*************************************************************************************************/
/*** Common configs for webpack in development or production                                   ***/
/*************************************************************************************************/
var common = {
    entry: {                            // mutiple entry points
        app: PATHS.app,                 // one is our app
        style: PATHS.style              // the other is our style
    },
    output: {
        path: PATHS.build,              // put the output to /build
        publicPath: '/bipso/',
        filename: '[name].[hash].js',   // output filename should be given when using multiple entries
        chunkFilename: '[hash].js'      // common chunks, async loaded modules
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: PATHS.app,
                loader: 'react-hot',    // use react-hot-loader
            },
            {
                test: /\.js?$/,
                include: PATHS.app,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'BIPSO',
            template: 'index.ejs'
        })
    ]
};

/*************************************************************************************************/
/*** Generate configs by development or production stage                                       ***/
/*************************************************************************************************/
switch (process.env.npm_lifecycle_event) {  // npm_lifecycle_event identifies whcih npm script you are running
    case 'build':
        config = merge(
            common,                                                         // common parts
            { devtool: 'source-map'},                                       // for debug
            parts.clean(PATHS.build),                                       // [ plugin ] check and clean the old build needs to be cleaned
            parts.setFreeVariable('process.env.NODE_ENV', 'production'),    // [ plugin ] set up environment var to a var
            parts.extractBundle({ name: 'vendor', entries: [ 'react' ]}),   // [ plugin ] bundle vendor lib to a separated file vendor.js, and create manifest.js
            parts.minify(),                                                 // [ plugin ] ugilify javascripts
            parts.setupCSS(PATHS.style)
            // parts.extractCSS(PATHS.style)                                   // [ loader + plugin ] extract css to a separated file, production only
            // parts.purifyCSS(PATHS.style)                                 // [ plugin ] extract used css
        );
        break;
    default:
        config = merge(
            common,
            { devtool: 'eval-source-map'},
            parts.setupCSS(PATHS.style),                                      // [ loader ] css loader
            parts.devServer({                                               // [ config + plugin ] setup dev-server and HMR support
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validator(config);
