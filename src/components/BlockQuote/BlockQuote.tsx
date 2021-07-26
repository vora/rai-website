import React, { PropsWithChildren } from "react";

import styles from "./BlockQuote.module.css";

export function BlockQuote({ children }: PropsWithChildren<unknown>) {
  return <blockquote className={styles.quote}>{children}</blockquote>;
}
