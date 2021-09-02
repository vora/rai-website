import React from "react";
import { graphql } from "gatsby";
import { RichText, RichTextContent } from "@/components/RichText";
import { Emphasis } from "@/components/Emphasis";
import { Image } from "@/components/Image";
import { TestimonialFragmentFragment } from "@/graphql/graphql-types";
import styles from "./Testimonial.module.css";

export function Testimonial({
  title,
  position,
  content,
  image,
}: TestimonialFragmentFragment) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.content}>
        <RichText content={content as RichTextContent} />
      </div>
      <div className={styles.footer}>
        {image && (
          <div className={styles.image}>
            <Image {...image} />
          </div>
        )}
        <div>
          <div className={styles.title}>
            <Emphasis variation="bold">{title}</Emphasis>
          </div>
          {position}
        </div>
      </div>
    </div>
  );
}

export const TestimonialFragment = graphql`
  fragment TestimonialFragment on ContentfulTestimonial {
    title
    position
    content {
      raw
    }
    image {
      title
      description
      gatsbyImageData(width: 125, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
`;
