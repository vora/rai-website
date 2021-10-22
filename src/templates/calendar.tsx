import React from "react";
import { graphql } from "gatsby";

import { PageTemplateQueryQuery } from "@/graphql/graphql-types";

import { Layout } from "@/components/Layout";
import { Container } from "@/components/Container";
import { Events } from "@/components/Events";
import { TabContainer } from "@/components/TabContainer/TabContainer";
import { News } from "@/components/News";
import { Article } from "../types/article";
import { Tab } from "../types/tab";

interface PageProps {
  data: PageTemplateQueryQuery;
}

interface ContentfulBlocks {
  resources: Array<Article>;
}

interface ContentfulPage {
  blocks: Array<ContentfulBlocks>;
}

function Calendar({ data }: PageProps) {
  const { page } = data;
  const CalendarTitle = "Events and News";
  const CalendarDescription =
    "Your one stop shop to see all current and scheduled events in one spot.";

  const contentTabs: Tab[] = [
    {
      tabName: "Events",
      tabContent: <Events />,
      tabElements: "EVENT",
    },
    {
      tabName: "News",
      tabContent: (
        <News
          articles={
            (page as ContentfulPage)?.blocks[0].resources as Array<Article>
          }
        />
      ),
      tabElements: "ARTICLE",
    },
  ];

  return (
    <Layout
      title={page?.seoTitle || page?.title}
      description={page?.seoDescription}
      headerTitle={CalendarTitle}
      headerDescription={CalendarDescription}
    >
      <Container>
        <TabContainer tabs={contentTabs} addDivider />
      </Container>
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
