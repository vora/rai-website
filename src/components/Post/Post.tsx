import React from "react";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/NewText";
import { Caption } from "@/components/Caption";

import * as styles from "./Post.module.css";

export type PostProps = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly published: string;
  readonly featured: boolean;
  readonly excerpt?: {
    excerpt: string;
  };
};

interface PostComponentProps {
  readonly post: PostProps;
}

export function Post({ post }: PostComponentProps) {
  return (
    <div>
      <div className={styles.heading}>
        <Heading as="h3">{post.title}</Heading>
      </div>
      {post?.excerpt && <Text>{post?.excerpt}</Text>}
      <div className={styles.date}>
        <Caption title={post.published} />
      </div>
    </div>
  );
}
