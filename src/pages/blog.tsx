import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PageTitle } from "@/components/PageTitle";
import { FeaturedPost } from "@/components/FeaturedPost";
import { AllContentfulBlogPostsQuery } from "@/graphql/graphql-types";
import { PostList } from "@/components/PostList";

interface BlogProps {
  data: AllContentfulBlogPostsQuery;
}

function Blog({ data }: BlogProps) {
  const posts = [...data.allContentfulBlogPost?.nodes];
  const featuredPostIndex = posts.findIndex((post) => post.featured);
  const featuredPost = posts[featuredPostIndex];

  return (
    <Layout title="Blog">
      <PageTitle title="Blog" />
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
  query AllContentfulBlogPosts {
    allContentfulBlogPost(sort: { fields: published, order: DESC }) {
      nodes {
        id
        featured
        ...PostBlogFragment
        ...FeaturedPostBlogFragment
      }
    }
  }
`;

export default Blog;
