import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulCards() {
  const query = useStaticQuery(graphql`
    query AllContentfulCardsTest {
      result: allContentfulCard {
        nodes {
          ...CardFragment
        }
      }
    }
  `);

  return query?.result;
}
