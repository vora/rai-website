import React from "react";
import { RichText, RichTextContent } from "@/components/RichText";
import {
  PostContentNewsFragmentFragment,
  PostContentBlogFragmentFragment,
} from "@/graphql/graphql-types";

import { graphql } from "gatsby";
import styles from "./PostContent.module.css";

export type PostContentContext =
  | PostContentNewsFragmentFragment
  | PostContentBlogFragmentFragment;

interface PostContentProps {
  readonly content: PostContentContext;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <article className={styles.post}>
      <RichText content={content as RichTextContent} />
    </article>
  );
}

export const PostContentBlogFragment = graphql`
  fragment PostContentBlogFragment on ContentfulBlogPost {
    content {
      raw
      references {
        ... on ContentfulAsset {
          ...ImageFragment
        }
      }
    }
  }
`;

export const PostContentNewsFragment = graphql`
  fragment PostContentNewsFragment on ContentfulNews {
    content {
      raw
      references {
        ... on ContentfulAsset {
          ...ImageFragment
        }
      }
    }
  }
`;
