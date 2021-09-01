import { useStaticQuery, graphql } from "gatsby";

export function useAllContentfulMembershipLevels() {
  const query = useStaticQuery(graphql`
    query AllContentfulMembershipLevels {
      result: allContentfulMembershipLevels {
        nodes {
          ...MembershipLevelFragment
        }
      }
    }
  `);

  return query?.result;
}
