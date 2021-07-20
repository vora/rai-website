import React, { PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./Container.module.css";

interface ContainerProps {
  /**
   * Add an additional className to the container component
   */
  readonly className?: string;
  /**
   * Determine the size (width) of the container
   */
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
