import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { ContentList } from ".";

export function ListAllContentListBlocks() {
  const data = useStaticQuery(graphql`
    query AllContentListBlockContent {
      allContentfulBlockContentList {
        nodes {
          ...ContentListFragment
          page {
            title
          }
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockContentList.nodes;

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
            <ContentList data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
