import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { PageTemplateQuery } from "@/graphql/graphql-types";

interface PageProps {
  data: PageTemplateQuery;
}

function Page({ data }: PageProps) {
  return (
    <Layout>
      {data?.blog?.blocks ? (
        <ContentfulBlocks blocks={data.blog.blocks} />
      ) : (
        "No Blocks"
      )}
    </Layout>
  );
}

export const query = graphql`
  query pageTemplate($slug: String!) {
    blog: contentfulPage(slug: { eq: $slug }) {
      title
      blocks {
        ... on ContentfulBlockCallToAction {
          ...CallToActionFragment
        }
      }
    }
  }
`;

export default Page;
