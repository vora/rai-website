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
  const { page } = data;

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      {page?.blocks ? (
        <ContentfulBlocks blocks={page.blocks} />
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
      seoTitle
      seoDescription
      blocks {
        ... on ContentfulBlockCallToAction {
          ...CallToActionFragment
        }
        ... on ContentfulBlockContent {
          ...ContentFragment
        }
        ... on ContentfulBlockContentList {
          ...ContentListFragment
        }
        ... on ContentfulBlockImageBand {
          ...ImageBandFragment
        }
        ... on ContentfulBlockJumbotron {
          ...JumbotronFragment
        }
      }
    }
  }
`;

export default Page;
