import React from "react";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/NewText";
import { Caption } from "@/components/Caption";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import styles from "./Post.module.css";

export type PostProps = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly published: string;
  readonly featured: boolean;
  readonly featuredImage: IGatsbyImageData;
  readonly excerpt?: {
    excerpt: string;
  };
};

interface PostComponentProps {
  readonly post: PostProps;
}

export function Post({ post }: PostComponentProps) {
  return (
    <article>
      <Link to={post.slug} className={styles.heading}>
        <Heading as="h3">{post.title}</Heading>
      </Link>
      {post?.excerpt?.excerpt && <Text>{post?.excerpt?.excerpt}</Text>}
      <div className={styles.date}>
        <Caption title={post.published} />
      </div>
    </article>
  );
}
