import React from "react";

import styles from "./Caption.module.css";

interface CaptionProps {
  readonly title: string;
}

export function Caption({ title }: CaptionProps) {
  return <div className={styles.caption}>{title}</div>;
}
