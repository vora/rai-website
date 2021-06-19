import React from "react";
import { Container } from "@/components/Container";
import { graphql, Link } from "gatsby";
import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { Layout } from "@/components/NewLayout";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import { PageTitle } from "@/components/PageTitle";
import { Caption } from "@/components/Caption";
import { Text } from "@/components/Text";
import { Divider } from "@/components/Divider";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
// @ts-expect-error TODO: will move this to typescript and contentful
import News from "../components/News";

import styles from "./blogTemplate.module.css";

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      author {
        name
        biography {
          biography
        }
      }
      published(formatString: "MMM D, YYYY")
      featuredImage {
        gatsbyImageData(width: 900, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
      content {
        raw
      }
      seoTitle
      seoDescription
    }
  }
`;

interface BlogPostProps {
  data: {
    blog: {
      id: string;
      title: string;
      author: {
        name: string;
        biography: {
          biography: string;
        };
      };
      published: string;
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      featuredImage: IGatsbyImageData;
      seoTitle?: string;
      seoDescription?: string;
    };
  };
}

// TODO: Move "More News " to a component
function BlogPost({ data: { blog } }: BlogPostProps) {
  const options = {
    renderMark: {
      // TODO: Make a BOLD text component. Maybe an EMPHASIS type component
      // @ts-expect-error TODO: Figure out how to type this
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      // @ts-expect-error TODO: Figure out how to type this
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HR]: () => <Divider />,
      // @ts-expect-error TODO: Figure out how to type this
      [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
      // @ts-expect-error TODO: Figure out how to type this
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3">{children}</Heading>
      ),
      // @ts-expect-error TODO: Figure out how to type this
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className={styles.blockQuote}>{children}</blockquote>
      ),
      // @ts-expect-error TODO: Figure out how to type this
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a href={data.uri} className={styles.link}>
          {children}
        </a>
      ),
    },
  };

  const image = getImage(blog.featuredImage);

  return (
    <Layout
      title={blog.seoTitle || blog.title}
      description={blog?.seoDescription}
    >
      <article>
        <Container size="small">
          <PageTitle title={blog.title} />
          <time className={styles.date}>
            <Caption title={blog.published} />{" "}
            <div className="s9-widget-wrapper" />
          </time>
          {image && (
            <div className={styles.image}>
              <GatsbyImage image={image} alt={blog.title} />
            </div>
          )}
          <div className={styles.post}>
            {blog.content && renderRichText(blog.content, options)}
            {blog.author && (
              <>
                <address>
                  <Caption title={`By: ${blog.author.name}`} />
                </address>
                {blog?.author?.biography?.biography && (
                  <div>{blog?.author?.biography?.biography}</div>
                )}
              </>
            )}
          </div>
        </Container>

        <div className={styles.news}>
          <Container>
            <div className={styles.newsTitle}>
              <Heading as="h3">More News</Heading>
              <Link to="/news" className={styles.newsLink}>
                More News
                <Icon icon="ArrowRight" />
              </Link>
            </div>
            <News />
          </Container>
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
