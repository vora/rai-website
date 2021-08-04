import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { ResourceList } from ".";

export function ListAllResourceListBlocks() {
  const data = useStaticQuery(graphql`
    query AllResourceListBlocks {
      allContentfulBlockResourceList {
        nodes {
          title
          ...ResourceListFragment
          page {
            title
          }
          blog_post {
            title
          }
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
            pages={[...block.page, ...block.blog_post]}
          >
            <ResourceList data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
