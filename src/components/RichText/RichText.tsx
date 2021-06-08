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

export type RichTextContent = RenderRichTextData<ContentfulRichTextGatsbyReference>;

interface RichTextProps {
  readonly size?: "base" | "large";
  readonly content: RichTextContent;
}

export function RichText({ size = "base", content }: RichTextProps) {
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
        <Text size={size}>{children}</Text>
      ),
      [INLINES.HYPERLINK]: ({ data }: Block | Inline, children: ReactNode) => {
        return (
          <Link url={data.uri} external={getIsExternal()}>
            {children}
          </Link>
        );

        // TODO: Lets figure out a better way to figure this out
        function getIsExternal() {
          if (data.uri.includes("mailto:")) {
            return true;
          }
          return false;
        }
      },
    },
  };

  return <>{renderRichText(content, options)}</>;
}
