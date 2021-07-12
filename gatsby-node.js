/**
 * Disabling no-var-requires here as this is a node file.
 * There is probably a better way to do this that we should
 * look into at some point.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `).then((result) => {
    // Generate our blog pages
    result.data.allContentfulBlogPost.nodes.forEach((node) => {
      createPage({
        path: `/blog/${node.slug.replace(/ /g, "-")}`,
        component: path.resolve(`./src/templates/blog.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });

    // Generate our pages
    result.data.allContentfulPage.nodes.forEach((node) => {
      if (node.slug !== "certification") {
        return;
      }

      createPage({
        path: `/${node.slug.replace(/ /g, "-")}`,
        component: path.resolve(`./src/templates/page.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  config.resolve.alias = {
    ...config.resolve.alias,
    "@/components": path.resolve(__dirname, "src/components"),
    "@/hooks": path.resolve(__dirname, "src/hooks"),
    "@/blocks": path.resolve(__dirname, "src/blocks"),
    components: path.resolve(__dirname, "src/components"),
    styles: path.resolve(__dirname, "src/styles"),
  };

  actions.replaceWebpackConfig(config);
};
