import React, { ReactNode } from "react";
import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES, Inline, Block } from "@contentful/rich-text-types";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";

interface RichTextProps {
  readonly content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

export function RichText({ content }: RichTextProps) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: Block | Inline, children: ReactNode) => (
        <Heading as="h1">{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node: Block | Inline, children: ReactNode) => (
        <Heading>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node: Block | Inline, children: ReactNode) => (
        <Heading as="h3">{children}</Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
        <Text>{children}</Text>
      ),
      [INLINES.HYPERLINK]: ({ data }: Block | Inline, children: ReactNode) => {
        const isExternal = !data.uri.includes("responsible.ai");
        return (
          <Link url={data.uri} external={isExternal}>
            {children}
          </Link>
        );
      },
    },
  };

  return <>{renderRichText(content, options)}</>;
}
