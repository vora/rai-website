import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { PostProps } from "@/components/Post";
import { PostList } from "@/components/PostList";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Caption } from "@/components/Caption";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/NewText";
import { Icon } from "@/components/Icon";
import styles from "./blog.module.css";

// import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: published, order: DESC }) {
      nodes {
        id
        slug
        title
        published(formatString: "MMMM D, YYYY")
        featured
        excerpt {
          excerpt
        }
        featuredImage {
          gatsbyImageData(
            width: 750
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`;

interface BlogProps {
  data: {
    allContentfulBlogPost: {
      nodes: PostProps[];
    };
  };
}

// TODO: Move the Featured Image to its own component
function Blog({ data }: BlogProps) {
  const posts = [...data.allContentfulBlogPost?.nodes];
  const featuredIndex = posts.findIndex((post) => post.featured);
  const featured = posts[featuredIndex];
  const image = getImage(featured.featuredImage);

  return (
    <Layout title="Blog">
      <Container>
        <PageTitle title="Blog" />
      </Container>
      <div className={styles.featured}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <div className={styles.caption}>
              <Caption title="Featured Article" />
            </div>
            <Heading>{featured.title}</Heading>
            {featured?.excerpt?.excerpt && (
              <Text>{featured?.excerpt?.excerpt}</Text>
            )}
            <Link to={`/blog/${featured.slug}`} className={styles.link}>
              Read Blog
              <Icon icon="ArrowRight" />
            </Link>
          </div>
          <div className={styles.image}>
            {image && <GatsbyImage image={image} alt={featured.title} />}
          </div>
        </Container>
      </div>
      {posts && (
        <Container>
          <PostList
            posts={posts.filter((_, index) => index !== featuredIndex)}
          />
        </Container>
      )}
    </Layout>
  );
}

export default Blog;
