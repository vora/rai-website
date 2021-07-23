import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PageTitle } from "@/components/PageTitle";
import { FeaturedPost } from "@/components/FeaturedPost";
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
      <PageTitle title="Blog" />
      <FeaturedPost
        data={featuredPost}
        caption="Featured Article"
        linkText="Read Blog Post"
        slugPrefix="blog"
      />
      {/* {posts && (
        <Container>
          <PostList
            posts={posts.filter((_, index) => index !== featuredPostIndex)}
          />
        </Container>
      )} */}
    </Layout>
  );
}

export const query = graphql`
  query AllContentfulBlogPosts {
    allContentfulBlogPost(sort: { fields: published, order: DESC }) {
      nodes {
        id
        published(formatString: "MMMM D, YYYY")
        featured
        ...FeaturedPostBlogFragment
      }
    }
  }
`;

export default Blog;
