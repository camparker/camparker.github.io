module.exports = {
  siteMetadata: {
    title: `camparker.github.io`,
    siteUrl: `https://camparker.github.io`,
    description: `Cameron Parkers personal website`,
    author: `@camparker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CamParker`,
        short_name: `CamParker`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
