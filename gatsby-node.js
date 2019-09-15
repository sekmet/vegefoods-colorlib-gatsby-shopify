/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {

    const isProduction = stage !== 'develop';

    if (isProduction) {

    actions.setWebpackConfig({
        /*externals: {
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        },*/
        devtool: false,
        optimization: {
            minimizer: [new OptimizeCSSAssetsPlugin({})],
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                templates: path.resolve(__dirname, 'src/templates'),
                //scss: path.resolve(__dirname, 'src/sass'),
            },
        },
    })

    } else {

        actions.setWebpackConfig({
            resolve: {
                alias: {
                    components: path.resolve(__dirname, 'src/components'),
                    templates: path.resolve(__dirname, 'src/templates'),
                    //scss: path.resolve(__dirname, 'src/sass'),
                },
            },
        })

    }

}
