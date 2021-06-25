import { ContentFragmentFragment } from "@/graphql/graphql-types";
import { graphql } from "gatsby";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import React from "react";

import { Button } from "@/components/Button";
import styles from "./Content.module.css";

interface ContentProps {
  readonly data: ContentFragmentFragment;
}

export function Content({ data: { content, raiButton } }: ContentProps) {
  return (
    <Container>
      <div className={styles.content}>
        {content && <RichText content={content as RichTextContent} />}
        {raiButton?.action?.enabled && (
          <div className={styles.button}>
            <Button
              title={raiButton?.action?.title as string}
              url={raiButton?.action?.url as string}
              external={raiButton?.action?.external as boolean}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export const ContentFragment = graphql`
  fragment ContentFragment on ContentfulBlockContent {
    __typename
    id
    content {
      raw
    }
    raiButton {
      action {
        enabled
        title
        url
        external
      }
    }
  }
`;
