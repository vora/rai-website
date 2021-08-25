import React from "react";
import classNames from "classnames";
import { graphql } from "gatsby";
import { ContentFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import { Button } from "@/components/Button";

import styles from "./Content.module.css";

interface ContentProps {
  readonly data: ContentFragmentFragment;
}

export function Content({
  data: { variation, content, customButtonText, buttonLink },
}: ContentProps) {
  const cssVariation = variation?.toLowerCase().replace(" ", "");

  // @ts-expect-error we can expect the classname to exist here
  const wrapperClass = classNames(styles.wrapper, styles[cssVariation]);

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          {content && <RichText content={content as RichTextContent} />}
          {buttonLink && (
            <div className={styles.button}>
              <Button
                title={customButtonText ?? (buttonLink?.title as string)}
                url={
                  buttonLink.__typename === "ContentfulPage"
                    ? `/${buttonLink?.slug}`
                    : (buttonLink?.url as string)
                }
                external={buttonLink.__typename === "ContentfulResource"}
              />
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
    customButtonText
    buttonLink {
      ... on ContentfulPage {
        __typename
        slug
        title
      }
      ... on ContentfulResource {
        __typename
        url
        title
      }
    }
  }
`;
