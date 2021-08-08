import React, { Fragment, PropsWithChildren } from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { ImageFragmentFragment } from "@/graphql/graphql-types";

import styles from "./Image.module.css";

interface ImageProps extends ImageFragmentFragment {
  readonly animation?: "slide-from-left";
}

export function Image({
  animation,
  gatsbyImageData,
  description,
  ...rest
}: ImageProps) {
  const gatsbyImage = getImage(gatsbyImageData);
  const Wrapper = animation ? Animator : Fragment;

  if (!gatsbyImage) {
    return (
      <Wrapper>
        <NoImage />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <GatsbyImage image={gatsbyImage} alt={description ?? ""} {...rest} />
    </Wrapper>
  );
}

function NoImage() {
  return (
    <div className={styles.noImage}>
      <Icon icon="Image" size="large" />
      No Image Available
    </div>
  );
}

function Animator({ children }: PropsWithChildren<unknown>) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.image}
        initial={{ left: 250, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export const ImageFragment = graphql`
  fragment ImageFragment on ContentfulAsset {
    title
    description
    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
  }
`;
