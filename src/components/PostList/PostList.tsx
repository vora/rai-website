import React, { Fragment } from "react";
import { Post, PostProps } from "@/components/Post";
import { Divider } from "@/components/Divider";

import styles from "./PostList.module.css";

interface PostListProps {
  readonly posts: PostProps[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.posts}>
      {posts.map((post: PostProps, index) => {
        return (
          <Fragment key={post.id}>
            <Post post={post} />
            {index + 1 !== posts.length && <Divider />}
          </Fragment>
        );
      })}
    </div>
  );
}
