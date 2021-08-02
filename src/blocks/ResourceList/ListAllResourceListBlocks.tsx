import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { ResourceList } from ".";

export function ListAllResourceListBlocks() {
  const data = useStaticQuery(graphql`
    query AllResourceListBlocks {
      allContentfulBlockResourceList {
        nodes {
          ...ResourceListFragment
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockResourceList.nodes;

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
            <ResourceList data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
