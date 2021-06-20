import React from "react";
import { Maybe, CallToActionFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";

import styles from "./ContentfulBlocks.module.css";

type BlockType = Maybe<
  | CallToActionFragmentFragment
  | {
      __typename?: "ContentfulBlockJumboTron";
    }
>;

interface BlockProps {
  blocks: Maybe<Array<Maybe<BlockType>>>;
}

export function ContentfulBlocks({ blocks }: BlockProps) {
  if (!blocks) {
    return <></>;
  }

  return (
    <>
      {blocks.map((block) => {
        switch (block?.__typename) {
          default:
            return (
              <div className={styles.spacer}>
                <UnknownBlock block={block} />
              </div>
            );
        }
      })}
    </>
  );
}

interface UnknownBlockProps {
  readonly block?: BlockType;
}

function UnknownBlock({ block }: UnknownBlockProps) {
  return (
    <Container>
      <div className={styles.unknown}>
        Unknown block type: <span>{block?.__typename || "No Typename"}</span>
        <details>
          <summary>Block Info</summary>
          <pre className={styles.code}>{JSON.stringify(block, null, 2)}</pre>
        </details>
      </div>
    </Container>
  );
}
