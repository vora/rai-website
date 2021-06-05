import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Text.module.css";

interface TextProps {
  /**
   * Represents the size to display the text at.
   */
  readonly size?: "base" | "small" | "large";
}

export function Text({
  size = "base",
  children,
}: PropsWithChildren<TextProps>) {
  const textClass = classnames(styles.text, styles[size]);

  return <p className={textClass}>{children}</p>;
}
