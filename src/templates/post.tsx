import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PostQueryQuery } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { Divider } from "@/components/Divider";
import { PostMeta } from "@/components/PostMeta";
import { Image } from "@/components/Image";
import { PostContent, PostContentContext } from "@/components/PostContent";

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
        {post?.featuredImage && <Image {...post.featuredImage} />}
        {post?.content && (
          <PostContent content={post?.content as PostContentContext} />
        )}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMM D, YYYY")
      featuredImage {
        ...ImageFragment
      }
      ...PostContentBlogFragment
    }
    contentfulNews(slug: { eq: $slug }) {
      title
      published(formatString: "MMM D, YYYY")
      featuredImage {
        ...ImageFragment
      }
      ...PostContentNewsFragment
    }
  }
`;

export default Post;
