import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContentfulDemo } from "@/components/ContentfulDemo";
import { ListOfPeople } from ".";

export function ListAllListOfPeople() {
  const data = useStaticQuery(graphql`
    query AllListOfPeopleBlocks {
      allContentfulBlockListOfPeople {
        nodes {
          ...ListOfPeopleFragment
        }
      }
    }
  `);

  const blocks = data.allContentfulBlockListOfPeople.nodes;

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
            <ListOfPeople data={block} />
          </ContentfulDemo>
        );
      })}
    </>
  );
}
