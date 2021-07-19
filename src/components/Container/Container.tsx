import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Container.module.css";

interface ContainerProps {
  readonly className?: string;
  readonly size?: "base" | "small";
}

export function Container({
  children,
  className,
  size = "base",
}: PropsWithChildren<ContainerProps>) {
  const conatinerClass = classnames(styles.container, className, {
    [styles.small]: size === "small",
  });

  return <div className={conatinerClass}>{children}</div>;
}
