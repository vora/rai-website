import React from "react";
import { graphql } from "gatsby";
import { ContentFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import { ContentfulButton } from "@/components/ContentfulButton";

import classNames from "classnames";
import { ContentfulLink } from "@/components/ContentfulLink";
import styles from "./Content.module.css";

interface ContentProps {
  readonly data: ContentFragmentFragment;
}

export function Content({
  data: { variation, content, button },
}: ContentProps) {
  const contentClass = classNames(styles.content, {
    [styles.fullWidth]: variation === "Full Width",
  });

  const wrapperClass = classNames(styles.wrapper, {
    [styles.fullWidth]: variation === "Full Width",
  });

  const buttonClass = classNames(styles.button, {
    [styles.fullWidth]: variation === "Full Width",
  });

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={contentClass}>
          {content && <RichText content={content as RichTextContent} />}
          {button?.action?.enabled && (
            <div className={buttonClass}>
              {variation === "Full Width" ? (
                <ContentfulLink action={button?.action} />
              ) : (
                <ContentfulButton action={button?.action} />
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export const ContentFragment = graphql`
  fragment ContentFragment on ContentfulBlockContent {
    __typename
    id
    variation
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
