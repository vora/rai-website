import React from "react";
import {
  Maybe,
  CallToActionFragmentFragment,
  ContentFragmentFragment,
  ContentListFragmentFragment,
  ImageBandFragmentFragment,
  JumbotronFragmentFragment,
  ResourceListFragmentFragment,
} from "@/graphql/graphql-types";
import { CallToAction } from "@/blocks/CallToAction";
import { Content } from "@/blocks/Content";
import { Container } from "@/components/Container";
import { ContentList } from "@/blocks/ContentList";
import { ImageBand } from "@/blocks/ImageBand";
import { Jumbotron } from "@/blocks/Jumbotron";
import { ResourceList } from "@/blocks/ResourceList";

import { graphql } from "gatsby";
import styles from "./ContentfulBlocks.module.css";

type BlockType = Maybe<
  | ResourceListFragmentFragment
  | CallToActionFragmentFragment
  | ContentFragmentFragment
  | ContentListFragmentFragment
  | ImageBandFragmentFragment
  | JumbotronFragmentFragment
>;

interface BlockProps {
  readonly blocks: Maybe<Array<Maybe<BlockType>>>;
}

export function ContentfulBlocks({ blocks }: BlockProps) {
  if (!blocks) {
    return <></>;
  }

  return (
    <div className={styles.blocks}>
      {blocks.map((block) => {
        switch (block?.__typename) {
          case "ContentfulBlockResourceList":
            return (
              <div className={styles.noSpace}>
                <ResourceList data={block} key={block.id} />
              </div>
            );
          case "ContentfulBlockCallToAction":
            return <CallToAction data={block} key={block.id} />;
          case "ContentfulBlockContent":
            return <Content data={block} key={block.id} />;
          case "ContentfulBlockContentList":
            return <ContentList data={block} key={block.id} />;
          case "ContentfulBlockImageBand":
            return <ImageBand data={block} key={block.id} />;
          case "ContentfulBlockJumbotron":
            return (
              <div className={styles.noSpace}>
                <Jumbotron data={block} key={block.id} />
              </div>
            );
          default:
            return (
              <div className={styles.spacer}>
                <UnknownBlock block={block} />
              </div>
            );
        }
      })}
    </div>
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

export const ContentfulBlocksFragment = graphql`
  fragment ContentfulBlocksFragment on ContentfulPage {
    blocks {
      ... on ContentfulBlockResourceList {
        ...ResourceListFragment
      }
      ... on ContentfulBlockCallToAction {
        ...CallToActionFragment
      }
      ... on ContentfulBlockContent {
        ...ContentFragment
      }
      ... on ContentfulBlockContentList {
        ...ContentListFragment
      }
      ... on ContentfulBlockImageBand {
        ...ImageBandFragment
      }
      ... on ContentfulBlockJumbotron {
        ...JumbotronFragment
      }
    }
  }
`;
