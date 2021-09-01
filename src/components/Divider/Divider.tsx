import React from "react";
import classnames from "classnames";

import styles from "./Divider.module.css";

interface DividerProps {
  readonly spacing?: "small" | "base" | "largest";
}

export function Divider({ spacing = "base" }: DividerProps) {
  const dividerClass = classnames(styles.divider, styles[spacing]);

  return <hr className={dividerClass} />;
}
