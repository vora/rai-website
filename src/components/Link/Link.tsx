import React, { PropsWithChildren } from "react";
import { Link as GatsbyLink } from "gatsby";

import styles from "./Link.module.css";

interface LinkProps {
  readonly url: string;
}

export function Link({ url, children }: PropsWithChildren<LinkProps>) {
  return (
    <GatsbyLink className={styles.link} to={url}>
      {children}
    </GatsbyLink>
  );
}
