import React from "react";

import styles from "./Caption.module.css";

interface CaptionProps {
  /**
   * Text to be displayed in the Caption. Reserved for short
   * amounts of text
   */
  readonly title: string;
}

export function Caption({ title }: CaptionProps) {
  return <div className={styles.caption}>{title}</div>;
}
