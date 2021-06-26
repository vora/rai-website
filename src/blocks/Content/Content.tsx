import React from "react";
import { graphql } from "gatsby";
import { ContentFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import { ContentfulButton } from "@/components/ContentfulButton";

import styles from "./Content.module.css";

interface ContentProps {
  readonly data: ContentFragmentFragment;
}

export function Content({ data: { content, button } }: ContentProps) {
  return (
    <Container>
      <div className={styles.content}>
        {content && <RichText content={content as RichTextContent} />}
        {button?.action && (
          <div className={styles.button}>
            <ContentfulButton action={button?.action} />
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
    button {
      action {
        enabled
        entrySlug
        external
        externalUrl
        title
      }
    }
  }
`;
