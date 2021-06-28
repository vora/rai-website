import React, { PropsWithChildren } from "react";
import { Container } from "@/components/Container";
import { Emphasis } from "@/components/Emphasis";
import { Text } from "@/components/Text";

import styles from "./ContentfulDemo.module.css";

interface ContentfulDemoProps {
  readonly title: string;
  readonly data: unknown;
  readonly pages: {
    title: string;
  }[];
}

export function ContentfulDemo({
  title,
  data,
  pages,
  children,
}: PropsWithChildren<ContentfulDemoProps>) {
  const titles = pages?.map((page) => page.title);

  return (
    <div className={styles.demo}>
      <Container>
        <Text size="large">
          <Emphasis variation="bold">Title: {title}</Emphasis>
        </Text>
        <Text size="small">
          Used on:{" "}
          {titles ? (
            <Emphasis variation="bold">{titles.join(", ")} Pages</Emphasis>
          ) : (
            "No pages"
          )}
        </Text>
      </Container>

      <div className={styles.content}>{children}</div>
      <Container>
        <details>
          <summary className={styles.summary}>Data</summary>
          <pre className={styles.details}>
            {JSON.stringify(data, undefined, 2)}
          </pre>
        </details>
      </Container>
    </div>
  );
}
