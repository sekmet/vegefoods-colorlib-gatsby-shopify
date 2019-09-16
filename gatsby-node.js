/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {

    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                templates: path.resolve(__dirname, 'src/templates'),
                scss: path.resolve(__dirname, 'src/scss'),
            },
        },
    })

}
