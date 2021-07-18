module.exports = {
  siteMetadata: {
    title: `MMMohebi CV`,
    siteUrl: `https://mmmohebi.ir`,
    description: `Mohebi Introduction`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MMMohebi CV`,
        short_name: `MMMohebi CV`,
        start_url: `/`,
        background_color: `#20202a`,
        theme_color: `#2c2c38`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
  ],
};
