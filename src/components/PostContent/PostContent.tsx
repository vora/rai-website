import React from "react";
import { RichText, RichTextContent } from "@/components/RichText";
import { PostContentFragmentFragment } from "@/graphql/graphql-types";

import { graphql } from "gatsby";
import styles from "./PostContent.module.css";

export type PostContentContext = PostContentFragmentFragment;

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

export const PostContentFragment = graphql`
  fragment PostContentFragment on ContentfulBlogPost {
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
