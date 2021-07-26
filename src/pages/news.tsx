import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PageTitle } from "@/components/PageTitle";
import { FeaturedPost } from "@/components/FeaturedPost";
import { PostList } from "@/components/PostList";
import { Container } from "@/components/Container";
import { NewsPageQuery } from "@/graphql/graphql-types";

interface BlogProps {
  data: NewsPageQuery;
}

function News({ data }: BlogProps) {
  const pageTitle = data.contentfulMicroContent?.value ?? "News";
  const posts = [...data.allContentfulBlogPost?.nodes];
  const featuredPostIndex = posts.findIndex((post) => post.featured);
  const featuredPost = posts[featuredPostIndex];

  return (
    <Layout title="Blog">
      <Container>
        <PageTitle title={pageTitle} />
      </Container>
      <FeaturedPost
        data={featuredPost}
        caption="Featured Article"
        linkText="Read Article"
        slugPrefix="news"
      />
      <PostList
        posts={posts.filter((_, index) => index !== featuredPostIndex)}
      />
    </Layout>
  );
}
export const query = graphql`
  query NewsPage {
    contentfulMicroContent(key: { eq: "News Page Title" }) {
      value
    }
    allContentfulBlogPost(
      sort: { fields: published, order: DESC }
      filter: { category: { eq: "News" } }
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

export default News;
