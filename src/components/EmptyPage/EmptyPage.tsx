import React, { PropsWithChildren } from "react";

import styles from "./EmptyPage.module.css";

export function EmptyPage({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.page}>{children}</div>;
}
