module.exports = {
  siteMetadata: {
    title: `Ty Lessard`,
    description: `A list of projects, both past and present.`,
    author: `Ty Lessard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./data/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ty Lessard`,
        short_name: `Ty Lessard`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/stormlessard-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
