import React from "react";
import { Maybe, CallToActionFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";

import styles from "./ContentfulBlocks.module.css";

interface BlockProps {
  blocks: Maybe<CallToActionFragmentFragment>[];
}

export function ContentfulBlocks({ blocks }: BlockProps) {
  return (
    <>
      {blocks.map((block) => {
        if (!block?.__typename) {
          return (
            <div className={styles.spacer}>
              <UnknownBlock />
            </div>
          );
        }

        switch (block.__typename) {
          default:
            return (
              <div className={styles.spacer}>
                <UnknownBlock title={block.__typename} />
              </div>
            );
        }
      })}
    </>
  );
}

interface UnknownBlockProps {
  readonly title?: string;
}

function UnknownBlock({ title = "No Typename" }: UnknownBlockProps) {
  return (
    <Container>
      <div className={styles.unknown}>
        Unknown block type: <span>{title}</span>
      </div>
    </Container>
  );
}
