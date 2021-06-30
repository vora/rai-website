import React from "react";
import classnames from "classnames";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { JumbotronFragmentFragment } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";
import { ContentfulButton } from "@/components/ContentfulButton";

import styles from "./Jumbotron.module.css";

interface JumbotronProps {
  readonly data: JumbotronFragmentFragment;
}

export function Jumbotron({
  data: {
    title,
    content,
    button,
    image,
    imageAlignment,
    imageOnLeft,
    backgroundImage,
    backgroundColor,
  },
}: JumbotronProps) {
  const mainImage = getImage(image?.gatsbyImageData);
  const bgImage = getImage(backgroundImage?.gatsbyImageData);

  const wrapperClass = classnames(styles.wrapper, {
    [styles.grey]: backgroundColor === "Grey",
    [styles.bottom]: imageAlignment === "Bottom",
    [styles.top]: imageAlignment === "Top",
  });

  const imageClass = classnames(styles.image, {
    [styles.imageOnLeft]: imageOnLeft === true,
  });

  const contentClass = classnames(styles.content, {
    [styles.imageOnLeft]: imageOnLeft === true,
  });

  return (
    <div className={wrapperClass}>
      <Container>
        <div className={styles.container}>
          <div className={contentClass}>
            <Heading>{title}</Heading>
            <RichText content={content as RichTextContent} />
            {button?.action?.enabled && (
              <ContentfulButton action={button?.action} />
            )}
          </div>

          {mainImage && (
            <div className={imageClass}>
              <GatsbyImage
                image={mainImage}
                alt={image?.description ?? ""}
                title={image?.title ?? ""}
              />
            </div>
          )}
        </div>
      </Container>
      {bgImage && (
        <div className={styles.background}>
          <GatsbyImage image={bgImage} alt="" title="" />
        </div>
      )}
    </div>
  );
}

export const JumbotronFragment = graphql`
  fragment JumbotronFragment on ContentfulBlockJumbotron {
    __typename
    id
    title
    content {
      raw
    }
    button {
      action {
        enabled
        entrySlug
        external
        externalUrl
        title
      }
    }
    image {
      gatsbyImageData(placeholder: BLURRED)
      title
      description
    }
    backgroundImage {
      gatsbyImageData(placeholder: BLURRED)
    }
    backgroundColor
    imageAlignment
    imageOnLeft
  }
`;
