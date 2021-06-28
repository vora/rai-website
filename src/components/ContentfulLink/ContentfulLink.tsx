import React from "react";
import { Link, LinkProps } from "@/components/Link";
import { Maybe, Scalars } from "@/graphql/graphql-types";

interface ContentfulButtonProps {
  action: {
    title?: Maybe<Scalars["String"]>;
    externalUrl?: Maybe<Scalars["String"]>;
    external?: Maybe<Scalars["Boolean"]>;
    enabled?: Maybe<Scalars["Boolean"]>;
    entrySlug?: Maybe<Scalars["String"]>;
    icon?: LinkProps["icon"];
  };
}

export function ContentfulLink({ action }: ContentfulButtonProps) {
  const { title, external, externalUrl, enabled, entrySlug } = action;
  const url = external ? externalUrl : `/${entrySlug}`;

  if (!enabled || !title || !url) {
    return <></>;
  }

  // return <Link {...(action as ButtonProps)} url={url} />;
  return (
    <Link
      external={external || false}
      url={external ? (externalUrl as string) : (entrySlug as string)}
      icon="ArrowRight"
    >
      {title}
    </Link>
  );
}
