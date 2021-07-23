import React from "react";
import { graphql } from "gatsby";
import { Link } from "@/components/Link";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Caption } from "@/components/Caption";
import {
  PostNewsFragmentFragment,
  PostBlogFragmentFragment,
} from "@/graphql/graphql-types";

import styles from "./Post.module.css";

interface PostProps {
  readonly data: PostNewsFragmentFragment | PostBlogFragmentFragment;
}

export function Post({ data }: PostProps) {
  return (
    <article>
      <Link url={data?.slug ?? ""}>
        <Heading as="h3">{data.title}</Heading>
      </Link>
      {data.excerpt?.excerpt && <Text>{data.excerpt?.excerpt}</Text>}
      <div className={styles.date}>
        <Caption title={data.published} />
      </div>
    </article>
  );
}

export const PostNewsFragment = graphql`
  fragment PostNewsFragment on ContentfulNews {
    id
    title
    slug
    published(formatString: "MMMM D, YYYY")
    excerpt {
      excerpt
    }
  }
`;

export const PostBlogFragment = graphql`
  fragment PostBlogFragment on ContentfulBlogPost {
    id
    title
    slug
    published(formatString: "MMMM D, YYYY")
    excerpt {
      excerpt
    }
  }
`;
