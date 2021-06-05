import React, { PropsWithChildren } from "react";
import { Link as GatsbyLink } from "gatsby";

import styles from "./Link.module.css";

interface LinkProps {
  readonly url: string;
  /**
   * Should the link open in a new tab. This should be only
   * used for navigating to a new domain.
   */
  readonly external?: boolean;
}

export function Link({
  external = false,
  url,
  children,
}: PropsWithChildren<LinkProps>) {
  if (external) {
    return (
      <a href={url} target="_blank" className={styles.link} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink className={styles.link} to={url}>
      {children}
    </GatsbyLink>
  );
}
