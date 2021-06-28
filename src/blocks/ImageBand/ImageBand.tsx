import React from "react";
import { graphql } from "gatsby";
import { ImageBandFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styles from "./ImageBande.module.css";

interface ImageBandProps {
  readonly data: ImageBandFragmentFragment;
}

export function ImageBand({ data: { image } }: ImageBandProps) {
  const gatsbyImage = getImage(image?.gatsbyImageData);

  if (!gatsbyImage) {
    return <></>;
  }

  return (
    <div className={styles.imageBand}>
      <Container>
        <GatsbyImage
          image={gatsbyImage}
          alt={image?.description ?? ""}
          title={image?.title ?? ""}
        />
      </Container>
    </div>
  );
}

export const ImageBandFragment = graphql`
  fragment ImageBandFragment on ContentfulBlockImageBand {
    __typename
    id
    image {
      title
      description
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
`;
