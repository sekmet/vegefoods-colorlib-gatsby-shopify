require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const siteMetadata = require("./static/admin/site_metadata")
const blogOptions = require("./static/admin/blog_options")
blogOptions.siteMetadata = siteMetadata
const shopOptions = require("./static/admin/shop_options")
const shopifyOptions = require('./gatsby-shopifystore')
//set shopify buy button options
shopOptions.productOptions = shopifyOptions

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/static/images/`,
              name: `images`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/components/`,
              name: `components`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/pages/`,
              name: `pages`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/content/posts/`,
              name: `posts`,
          },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
          resolve: "gatsby-theme-blogify",
          options: blogOptions,
      },
      {
          resolve: "gatsby-theme-shopifystore",
          options: shopOptions
      },
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
