import React from "react";
import { Heading } from "@/components/Heading";

import styles from "./PageTitle.module.css";

interface PageTitleProps {
  readonly title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className={styles.title}>
      <Heading as="h1">{title}</Heading>
    </div>
  );
}
