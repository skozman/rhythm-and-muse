module.exports = {
  siteMetadata: {
    title: "Rhythm and Muse",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require(`autoprefixer`)
        ],
      },
    },
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cdv73xq75znr`,
        accessToken: 'JhcwzRaazQW7fWyPNiN7oV6dYt5eXRE-70Y69XHro1w',
      },
    },
  ],
};