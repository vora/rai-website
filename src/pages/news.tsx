import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
// import { FeaturedPost } from "@/components/FeaturedPost";
// import { PostList } from "@/components/PostList";
import { AllContentfulNewsQuery } from "@/graphql/graphql-types";
// @ts-expect-error Old component
import News from "../components/News";

interface NewsPageProps {
  readonly data: AllContentfulNewsQuery;
}
function NewsPage({ data }: NewsPageProps) {
  console.log(data);
  // const posts = [...data.allContentfulNews?.nodes];
  // const featuredPostIndex = posts.findIndex((post) => post.featured);
  // const featuredPost = posts[featuredPostIndex];
  return (
    <Layout title="News">
      <Container>
        <PageTitle title="In the News" />
      </Container>
      {/* <FeaturedPost
        data={featuredPost}
        caption="Featured Article"
        linkText="Read Article"
        slugPrefix="news"
      /> */}
      {/* <PostList
        posts={posts.filter((_, index) => index !== featuredPostIndex)}
      /> */}
      <div
        style={{
          background: "var(--color--ghost)",
          padding: "var(--space--xxlarge)",
        }}
      >
        <Container>
          <Heading as="h3">More News</Heading>
          <div style={{ marginTop: "var(--space--large" }}>
            <News />
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AllContentfulNews {
    allContentfulNews(sort: { fields: published, order: DESC }) {
      nodes {
        id
        featured
      }
    }
  }
`;

export default NewsPage;
