import { graphql, useStaticQuery } from "gatsby";
import { ContentfulAsset } from "@/graphql/graphql-types";

export function useContentfulImage(id: string): ContentfulAsset {
  const images = useStaticQuery(graphql`
    query AllContentfulAssets {
      allContentfulAsset {
        nodes {
          title
          description
          gatsbyImageData
          contentful_id
        }
      }
    }
  `);

  const newImage = images?.allContentfulAsset?.nodes?.find(
    (image: ContentfulAsset) => image.contentful_id === id
  );

  return newImage;
}
