import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { EmptyPage } from "@/components/EmptyPage";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
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
        <EmptyPage>
          <Icon icon="AlertTriangle" />{" "}
          <Text>
            There is no content on this page, the robots must have eaten it up
          </Text>
        </EmptyPage>
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
