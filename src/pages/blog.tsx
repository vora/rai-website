import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PageTitle } from "@/components/PageTitle";
import { FeaturedPost } from "@/components/FeaturedPost";
import { PostList } from "@/components/PostList";
import { Container } from "@/components/Container";
import { AllContentfulBlogPostsQuery } from "@/graphql/graphql-types";

interface BlogProps {
  data: AllContentfulBlogPostsQuery;
}

function Blog({ data }: BlogProps) {
  const posts = [...data.allContentfulBlogPost?.nodes];
  const featuredPostIndex = posts.findIndex((post) => post.featured);
  const featuredPost = posts[featuredPostIndex];

  return (
    <Layout title="Blog">
      <Container>
        <PageTitle title="Blog" />
      </Container>
      <FeaturedPost
        data={featuredPost}
        caption="Featured Article"
        linkText="Read Blog Post"
        slugPrefix="blog"
      />
      <PostList
        posts={posts.filter((_, index) => index !== featuredPostIndex)}
      />
    </Layout>
  );
}

export const query = graphql`
  query BlogPage {
    allContentfulBlogPost(sort: { fields: published, order: DESC }) {
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
