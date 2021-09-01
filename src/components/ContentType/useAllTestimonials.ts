import { useStaticQuery, graphql } from "gatsby";

export function useAllTestimonials() {
  const query = useStaticQuery(graphql`
    query AllContentfulTestimonials {
      result: allContentfulTestimonial {
        nodes {
          ...TestimonialFragment
        }
      }
    }
  `);

  return query?.result;
}
