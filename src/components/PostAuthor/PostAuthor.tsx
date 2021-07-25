import { PostAuthorFragmentFragment } from "@/graphql/graphql-types";
import { graphql } from "gatsby";
import React from "react";
import { Caption } from "../Caption";
import { Text } from "../Text";

import styles from "./PostAuthor.module.css";

interface PostAuthorProps {
  readonly data: PostAuthorFragmentFragment;
}

export function PostAuthor({ data }: PostAuthorProps) {
  return (
    <div className={styles.author}>
      <Caption title={`By: ${data.name}`} />
      {data.biography?.biography && (
        <div className={styles.bio}>
          <Text size="small">{data.biography?.biography}</Text>
        </div>
      )}
    </div>
  );
}

export const PostAuthorFragment = graphql`
  fragment PostAuthorFragment on ContentfulAuthor {
    name
    biography {
      biography
    }
  }
`;
