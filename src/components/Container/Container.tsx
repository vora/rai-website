import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import * as styles from "./Container.module.css";

interface ContainerProps {
  readonly className?: string;
  readonly flex?: boolean;
  readonly justifyContent?: "flexStart" | "spaceBetween";
  readonly alignItems?: "center" | "flexStart";
  readonly size?: "base" | "small";
}

export function Container({
  children,
  className,
  flex,
  justifyContent = "flexStart",
  alignItems = "center",
  size = "base",
}: PropsWithChildren<ContainerProps>) {
  const conatinerClass = classnames(styles.container, className, {
    [styles.flex]: flex,
    [styles.justifySpaceBetween]: justifyContent === "spaceBetween",
    [styles.alignItemsCenter]: alignItems === "center",
    [styles.small]: size === "small",
  });

  return <div className={conatinerClass}>{children}</div>;
}
