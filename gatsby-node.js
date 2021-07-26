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
          category
        }
      }
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `).then(({ data }) => {
    // Generate our blog pages
    data.allContentfulBlogPost.nodes.forEach((node) => {
      const getCategory = () => {
        if (node.category === "News") {
          return "news";
        }

        return "blog";
      };

      createPage({
        path: `/${getCategory()}/${node.slug.replace(/ /g, "-")}`,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });

    // Generate our pages
    data.allContentfulPage.nodes.forEach((node) => {
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
