import React, { PropsWithChildren } from "react";
import { Container } from "@/components/Container";

import styles from "./ContentfulDemo.module.css";
import { Emphasis } from "../Emphasis";

interface ContentfulDemoProps {
  readonly title: string;
  readonly data: unknown;
}

export function ContentfulDemo({
  title,
  data,
  children,
}: PropsWithChildren<ContentfulDemoProps>) {
  return (
    <div className={styles.demo}>
      <Container>
        <Emphasis variation="bold">Title: {title}</Emphasis>
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
