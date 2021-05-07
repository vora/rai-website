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
  const conatinerClass = classnames(
    styles.container,
    styles[`justify${uppercaseFirstLetter(justifyContent)}`],
    {
      [styles.flex]: flex,
    }
  );

  return <div className={conatinerClass}>{children}</div>;

  function uppercaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
