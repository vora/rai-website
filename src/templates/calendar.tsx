import React from "react";
import { graphql } from "gatsby";
import { Layout } from "@/components/Layout";
import { PageTitle } from "@/components/PageTitle";
import { ContentfulBlocks } from "@/components/ContentfulBlocks";
import { PageTemplateQueryQuery } from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { Events } from "@/components/Events";

interface PageProps {
  data: PageTemplateQueryQuery;
}

function Calendar({ data }: PageProps) {
  const { page } = data;

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
    >
      <Container>
        <PageTitle title={data.page?.title ?? "Events Calendar"} />
        <Events />
      </Container>
      {page?.blocks && <ContentfulBlocks blocks={page.blocks} />}
    </Layout>
  );
}

export const query = graphql`
  query CalendarQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      ...PageFragment
      ...ContentfulBlocksFragment
    }
  }
`;

export default Calendar;
