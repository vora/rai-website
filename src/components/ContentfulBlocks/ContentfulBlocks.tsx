import React from "react";
import { Maybe, CallToActionFragmentFragment } from "@/graphql/graphql-types";

interface BlockProps {
  blocks: Maybe<CallToActionFragmentFragment>[];
}

export function ContentfulBlocks({ blocks }: BlockProps) {
  return (
    <>
      {blocks.map((block) => {
        if (!block?.__typename) {
          return <div>Unknown Block Type - No Typename</div>;
        }

        switch (block.__typename) {
          default:
            return <div>Unknown Block Type - {block.__typename}</div>;
        }
      })}
    </>
  );
}
