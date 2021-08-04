import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { FeaturedPost } from "@/components/FeaturedPost";
import { PostList } from "@/components/PostList";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { BlogTemplateQueryQuery } from "@/graphql/graphql-types";

interface BlogProps extends PageProps {
  readonly data: BlogTemplateQueryQuery;
}

function Blog({ data }: BlogProps) {
  const page = data.contentfulPage;
  const posts = [...data.allContentfulBlogPost?.nodes];
  const featuredPostIndex = posts.findIndex((post) => post.featured);
  const featuredPost = posts[featuredPostIndex];

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      {page?.title && (
        <Container>
          <PageTitle title={page?.title} />
        </Container>
      )}
      <FeaturedPost
        data={featuredPost}
        caption="Featured Article"
        linkText="Read Article"
        slugPrefix="news"
      />
      <PostList
        posts={posts.filter((_, index) => index !== featuredPostIndex)}
      />
      {page?.blocks && <ContentfulBlocks blocks={page?.blocks} />}
    </Layout>
  );
}

// query NewsPage {
//   contentfulMicroContent(key: { eq: "News Page Title" }) {
//     value
//   }
//   allContentfulBlogPost(
//     sort: { fields: published, order: DESC }
//     filter: { category: { eq: "News" } }
//   ) {
//     nodes {
//       id
//       featured
//       ...PostFragment
//       ...FeaturedPostFragment
//     }
//   }
// }

export const query = graphql`
  query BlogTemplateQuery($slug: String!, $category: String!) {
    contentfulPage(slug: { eq: $slug }) {
      ...PageFragment
      ...ContentfulBlocksFragment
    }
    allContentfulBlogPost(
      sort: { fields: published, order: DESC }
      filter: { category: { eq: $category } }
    ) {
      nodes {
        id
        featured
        ...PostFragment
        ...FeaturedPostFragment
      }
    }
  }
`;

export default Blog;
