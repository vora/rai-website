import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import * as styles from "./Container.module.css";

interface ContainerProps {
  readonly flex?: boolean;
  readonly justifyContent?: "flexStart" | "spaceBetween";
}

export function Container({
  children,
  flex,
  justifyContent = "flexStart",
}: PropsWithChildren<ContainerProps>) {
  const conatinerClass = classnames(styles.container, {
    [styles.flex]: flex,
    [styles.justifyFlexStart]: justifyContent === "flexStart",
    [styles.justifySpaceBetween]: justifyContent === "spaceBetween",
  });

  return <div className={conatinerClass}>{children}</div>;
}
