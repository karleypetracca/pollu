module.exports = {
  siteMetadata: {
    title: `Pollu - Delightful polls with a single click`,
    description: `Start any poll you like and get instant feedback from votes. An anonymous, serverless, privacy-first approach towards creating polling platforms. Free and open-source.`,
    author: `@nabil_tharwat16`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pollu - Delightful polls with a single click`,
        short_name: `Pollu`,
        start_url: `/`,
        background_color: `#202040`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/monogram.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}