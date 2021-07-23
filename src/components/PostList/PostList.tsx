import React, { Fragment } from "react";
import { Post } from "@/components/Post";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/Container";
import {
  PostNewsFragmentFragment,
  PostBlogFragmentFragment,
} from "@/graphql/graphql-types";

import styles from "./PostList.module.css";

interface PostListProps {
  readonly posts: Array<PostNewsFragmentFragment | PostBlogFragmentFragment>;
}

export function PostList({ posts }: PostListProps) {
  return (
    <Container className={styles.posts}>
      {posts.map((post, index) => {
        return (
          <Fragment key={post.id}>
            {index !== 0 && <Divider />}
            <Post data={post} />
          </Fragment>
        );
      })}
    </Container>
  );
}
