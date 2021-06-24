import React from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";
import { CallToActionFragmentFragment } from "@/graphql/graphql-types";
import { graphql } from "gatsby";

import styles from "./CallToAction.module.css";

interface CallToActionProps {
  readonly data: CallToActionFragmentFragment;
}

export function CallToAction({
  data: { title, content, raiButton },
}: CallToActionProps) {
  return (
    <Container>
      <div className={styles.cta}>
        {title && <Heading>{title}</Heading>}
        {content && (
          <div className={styles.content}>
            <RichText size="large" content={content as RichTextContent} />
          </div>
        )}
        {raiButton?.action?.enabled && (
          <Button
            title={raiButton?.action?.title as string}
            url={raiButton?.action?.url as string}
            external={raiButton?.action?.external as boolean}
            variation="inverted"
          />
        )}
      </div>
    </Container>
  );
}

export const CallToActionFragment = graphql`
  fragment CallToActionFragment on ContentfulBlockCallToAction {
    __typename
    id
    title
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
