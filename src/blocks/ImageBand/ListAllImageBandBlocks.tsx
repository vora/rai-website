import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { ImageBand } from ".";

export function ListAllImageBandBlocks() {
  const data = useStaticQuery(graphql`
    query AllContentImageBandBlocks {
      allContentfulBlockImageBand {
        nodes {
          title
          ...ImageBandFragment
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockImageBand.nodes;
  if (!blocks) {
    return <div>There are no blocks</div>;
  }

  return (
    <>
      {blocks.map((block: any) => {
        return (
          <ContentfulDemo
            key={block.id}
            title={block.title}
            data={block}
            pages={block.page}
          >
            <ImageBand data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
