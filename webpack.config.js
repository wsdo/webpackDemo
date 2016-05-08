
/*
 * @Author: wshudong
 * @Date:   2016-05-05 16:54:29
 * @Last Modified by:   wshudong
 * @Last Modified time: 2016-05-08 16:55:45
 */

'use strict';
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src');
//获取多页面的每个入口文件，用于配置中的entry
// function getEntry() {
//     var jsPath = path.resolve(srcDir, 'js');
//     var dirs = fs.readdirSync(jsPath);
//     var matchs = [],
//         files = {};
//     dirs.forEach(function(item) {
//         matchs = item.match(/(.+)\.js$/);
//         // console.log(matchs);
//         if (matchs) {
//             files[matchs[1]] = path.resolve(srcDir, 'js', item);
//         }
//     });
//     // console.log(JSON.stringify(files));
//     // console.log(matchs);
//     return files;
// }

module.exports = {
    cache: true,
    devtool: "source-map",
    // entry: getEntry(),
    entry: [
        './src/js/index.js',
        './src/js/main.js'
    ],
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel',
                include: __dirname
            },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    resolve: {
        // alias: {
        //     jquery: srcDir + "/js/lib/jquery.min.js",
        //     core: srcDir + "/js/core",
        //     ui: srcDir + "/js/ui"
        // },
        // modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    // externals: {
    //  "jquery": "jQuery"
    // },
    plugins: [
        // new CommonsChunkPlugin('common.js'),
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.DefinePlugin({
        //   "process.env": {
        //     NODE_ENV: JSON.stringify("production")
        //   }
        // }),
        // new webpack.ResolverPlugin(
        //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        // ),
        // new webpack.ProvidePlugin({
        //   $:      "jquery",
        //   jQuery: "jquery"
        // })
    ]
};
// module.exports = {
//     entry: "./src/page1.js",
//     output: {
//         path:__dirname,
//         publicPath: "/output/",
//         filename: 'bundle.js'
//     },
//     // devtool: 'source-map',
//     module: {
//         loaders:[
//             {test: /\.js$/, exclude: /node_modules/, loader:'react-hot!babel'},
//             {test: /\.css$/, loader:'style!css'}
//         ]
//     }
// };
