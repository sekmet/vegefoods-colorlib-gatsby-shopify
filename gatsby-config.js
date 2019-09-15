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
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'vegefoods-colorlib-gatsby-shopify',
              short_name: 'vegefoods',
              description: 'A simple starter to get up and developing quickly with Gatsby + Shopify and a stunning theme',
              homepage_url: 'https://vegefoods-colorlib-gatsby-shopify.netlify.com',
              start_url: '/',
              background_color: '#fff',
              theme_color: '#673ab7',
              display: 'standalone',
              crossOrigin: `use-credentials`,
              icons: [
                  {
                      src: '/img/android-chrome-192x192.png',
                      sizes: '192x192',
                      type: 'image/png',
                  },
                  {
                      src: '/img/android-chrome-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                  },
              ],
          },
      },
      // To learn more, visit: https://gatsby.dev/offline
      {
          resolve: `gatsby-plugin-offline`,
          options: {
              cacheId: `vegefoods-theme-offline`
          }
      },
      `gatsby-plugin-netlify-cache`
  ],
}
