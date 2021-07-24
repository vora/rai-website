import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PostQueryQuery } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Divider } from "@/components/Divider";
import { PostMeta } from "@/components/PostMeta";

interface PostProps {
  data: PostQueryQuery;
}

function Post({ data }: PostProps) {
  /**
   * Select whether we are dealing with news or blog post
   */
  const post = data.contentfulBlogPost || data.contentfulNews;

  return (
    <Layout>
      <Container size="small">
        {post?.title && (
          <>
            <PageTitle title={post?.title} />
            <Divider />
          </>
        )}

        <PostMeta date={post?.published} />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMM D, YYYY")
    }
    contentfulNews(slug: { eq: $slug }) {
      title
      published(formatString: "MMM D, YYYY")
    }
  }
`;

export default Post;
