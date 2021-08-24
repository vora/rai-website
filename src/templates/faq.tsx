import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/Layout";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { FaqQueryQuery } from "@/graphql/graphql-types";
import { Faqs } from "@/components/Faqs";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/Container";

interface FaqProps {
  data: FaqQueryQuery;
}

function FAQ({ data }: FaqProps) {
  const { page } = data;

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      <Container size="small">
        <PageTitle title={page?.title || "FAQs"} />
      </Container>
      <Faqs />
      {page?.blocks && <ContentfulBlocks blocks={page.blocks} />}
    </Layout>
  );
}

export const query = graphql`
  query FaqQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...PageFragment
      ...ContentfulBlocksFragment
    }
  }
`;
export default FAQ;
