import React, { ReactNode } from "react";
import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text";
import {
  BLOCKS,
  INLINES,
  Inline,
  Block,
  MARKS,
} from "@contentful/rich-text-types";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";
import { Emphasis } from "@/components/Emphasis";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Image } from "@/components/Image";
import { ImageFragmentFragment } from "@/graphql/graphql-types";
import { Divider } from "@/components/Divider";
import { BlockQuote } from "@/components/BlockQuote";

export type RichTextContent = RenderRichTextData<ContentfulRichTextGatsbyReference>;

interface RichTextProps {
  readonly size?: "base" | "large";
  readonly content: RichTextContent;
}

export function RichText({ size = "base", content }: RichTextProps) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <Emphasis variation="bold">{text}</Emphasis>
      ),
      [MARKS.ITALIC]: (text: ReactNode) => (
        <Emphasis variation="italics">{text}</Emphasis>
      ),
      [MARKS.UNDERLINE]: (text: ReactNode) => (
        <Emphasis variation="underline">{text}</Emphasis>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: ReactNode, children: ReactNode) => (
        <Heading as="h1">{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (node: ReactNode, children: ReactNode) => (
        <Heading>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node: ReactNode, children: ReactNode) => (
        <Heading as="h3">{children}</Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node: ReactNode, children: ReactNode) => (
        <Text size={size}>{children}</Text>
      ),
      [BLOCKS.QUOTE]: (node: ReactNode, children: ReactNode) => (
        <BlockQuote>{children}</BlockQuote>
      ),
      [BLOCKS.HR]: () => <Divider />,
      [INLINES.HYPERLINK]: (node: ReactNode, children: ReactNode) => {
        const { data } = node as Block | Inline;
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
          if (!data.uri.includes("responsible.ai")) {
            return true;
          }
          return false;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: ReactNode) => {
        const { data } = node as Inline | Block;
        const image = content.references.find(
          (asset) => asset.contentful_id === data.target.sys.id
        );
        return <Image {...(image as ImageFragmentFragment)} />;
      },
    },
  };

  return <>{documentToReactComponents(JSON.parse(content.raw), options)}</>;
}
