import React from "react";
import { graphql } from "gatsby";
import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text";
import { Layout } from "@/components/NewLayout";

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      published(formatString: "MMM D, YYYY")
      content {
        raw
      }
    }
  }
`;

interface BlogPostProps {
  data: {
    blog: {
      id: string;
      title: string;
      published: string;
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    };
  };
}

function BlogPost({ data: { blog } }: BlogPostProps) {
  return (
    <Layout>
      <h1>{blog.title}</h1>
    </Layout>
  );
}

export default BlogPost;
