import React from "react";
import { Heading } from "@/components/Heading";
import { Container } from "@/components/Container";

import styles from "./PageTitle.module.css";

interface PageTitleProps {
  readonly title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Container className={styles.title}>
      <Heading as="h1">{title}</Heading>
    </Container>
  );
}
