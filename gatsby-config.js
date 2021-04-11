// Environmental variables for access tokens
const accessToken = process.env.CONTENTFUL_TOKEN;
const spaceID = process.env.CONTENTFUL_SPACE;

module.exports = {
  siteMetadata: {
    title: "RAI Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: accessToken,
        spaceId: spaceID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
  ],
};
