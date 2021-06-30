import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { Jumbotron } from ".";

export function ListAllJumbotronBlocks() {
  const data = useStaticQuery(graphql`
    query AllJumbotronBlocks {
      allContentfulBlockJumbotron {
        nodes {
          ...JumbotronFragment
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockJumbotron.nodes;

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
            <Jumbotron data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
