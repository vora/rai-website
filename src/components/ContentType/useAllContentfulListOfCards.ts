import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulListOfCards() {
  const query = useStaticQuery(graphql`
    query AllContentfulBlockListOfCards {
      result: allContentfulBlockListOfCards {
        nodes {
          pageUsage: page {
            title
          }
          ...ListOfCardsFragment
        }
      }
    }
  `);

  return query?.result;
}
