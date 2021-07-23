import React from "react";
import { graphql } from "gatsby";
import { Container } from "@/components/Container";
import { Caption } from "@/components/Caption";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";
import { Image } from "@/components/Image";
import {
  FeaturedPostNewsFragmentFragment,
  FeaturedPostBlogFragmentFragment,
} from "@/graphql/graphql-types";
import styles from "./FeaturedPost.module.css";

interface FeaturedPostProps {
  readonly data:
    | FeaturedPostNewsFragmentFragment
    | FeaturedPostBlogFragmentFragment;
  readonly caption?: string;
  readonly linkText: string;
  readonly slugPrefix?: string;
}

export function FeaturedPost({
  data,
  caption,
  linkText,
  slugPrefix,
}: FeaturedPostProps) {
  const url = createUrl();
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div>
          {caption && (
            <div className={styles.caption}>
              <Caption title={caption} />
            </div>
          )}
          <Heading>{data.title}</Heading>
          <Text>{data.excerpt?.excerpt}</Text>
          <div className={styles.link}>
            <Link url={url} icon="ArrowRight">
              {linkText}
            </Link>
          </div>
        </div>
        {data.featuredImage && (
          <div className={styles.image}>
            <Image animation="slide-from-left" {...data.featuredImage} />
          </div>
        )}
      </Container>
    </div>
  );

  function createUrl() {
    let newUrl = "/";

    if (slugPrefix) {
      newUrl = `${newUrl + slugPrefix}/`;
    }

    newUrl += data.slug;

    return newUrl;
  }
}

export const FeaturedPostNewsFragment = graphql`
  fragment FeaturedPostNewsFragment on ContentfulNews {
    title
    excerpt {
      excerpt
    }
    slug
    featuredImage {
      ...ImageFragment
    }
  }
`;

export const FeaturedPostBlogFragment = graphql`
  fragment FeaturedPostBlogFragment on ContentfulBlogPost {
    title
    excerpt {
      excerpt
    }
    slug
    featuredImage {
      ...ImageFragment
    }
  }
`;
