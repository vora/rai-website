import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import * as styles from "./Container.module.css";

interface ContainerProps {
  readonly flex?: boolean;
  readonly justifyContent?: "flexStart" | "spaceBetween";
  readonly alignItems?: "center" | "flexStart";
}

export function Container({
  children,
  flex,
  justifyContent = "flexStart",
  alignItems = "center",
}: PropsWithChildren<ContainerProps>) {
  const conatinerClass = classnames(styles.container, {
    [styles.flex]: flex,
    [styles.justifySpaceBetween]: justifyContent === "spaceBetween",
    [styles.alignItemsCenter]: alignItems === "center",
  });

  return <div className={conatinerClass}>{children}</div>;
}
