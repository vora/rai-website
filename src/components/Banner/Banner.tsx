import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Text } from "../Text";

import styles from "./Banner.module.css";

export function Banner() {
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
    <div className={styles.banner} role="alert" aria-label="Important Message">
      <Text size="small">{data.contentfulMicroContent.value}</Text>
    </div>
  );
}
