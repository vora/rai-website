import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { Content } from ".";

export function ListAllContentBlocks() {
  const data = useStaticQuery(graphql`
    query AllContentBlockContent {
      allContentfulBlockContent {
        nodes {
          blockTitle
          ...ContentFragment
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockContent.nodes;

  if (!blocks) {
    return <div>There are no blocks</div>;
  }

  return (
    <>
      {blocks.map((block: any) => {
        return (
          <ContentfulDemo title={block.blockTitle} data={block}>
            <Content data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
