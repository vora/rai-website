import { graphql } from "gatsby";

import React from "react";
import { ContentListFragmentFragment } from "@/graphql/graphql-types";

interface ContentListProps {
  readonly data: ContentListFragmentFragment;
}

export function ContentList({
  data: { title, content, raiButton, listTitle, raiList },
}: ContentListProps) {
  return <div>Foo</div>;
}

export const ContentListFragment = graphql`
  fragment ContentListFragment on ContentfulBlockContentList {
    __typename
    id
    title
    content {
      raw
    }
    raiButton {
      action {
        enabled
        title
        url
        external
      }
    }
    listTitle
    raiList {
      items
    }
  }
`;
