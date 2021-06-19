import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/NewLayout";
import { EmptyPage } from "@/components/EmptyPage";
import { Text } from "@/components/Text";
import { Icon } from "@/components/Icon";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { PageTemplateQueryQuery } from "@/graphql/graphql-types";

interface PageProps {
  data: PageTemplateQueryQuery;
}

function Page({ data }: PageProps) {
  return (
    <Layout>
      {data?.page?.blocks ? (
        <ContentfulBlocks blocks={data.page.blocks} />
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
  query PageTemplateQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
      blocks {
        ... on ContentfulBlockCallToAction {
          __typename
          title
          content {
            raw
          }
          button {
            button {
              title
              url
              external
            }
          }
        }
      }
    }
  }
`;

export default Page;
