import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Banner } from "@/components/Banner";

export function WebsiteBanner() {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      contentfulMicroContent(key: { eq: "Website Banner" }) {
        value
      }
    }
  `);

  if (!data?.contentfulMicroContent?.value) {
    return <></>;
  }

  return (
    <Banner
      title={data.contentfulMicroContent.value}
      ariaLabel="Important Message"
    />
  );
}
