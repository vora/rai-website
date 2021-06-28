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
          page {
            title
          }
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
          <ContentfulDemo
            key={block.id}
            title={block.blockTitle}
            data={block}
            pages={block.page}
          >
            <Content data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
