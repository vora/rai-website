import React, { PropsWithChildren } from "react";

import styles from "./Emphasis.module.css";

interface EmphasisProps {
  readonly variation: "bold" | "italics" | "underline";
}

export function Emphasis({
  variation,
  children,
}: PropsWithChildren<EmphasisProps>) {
  const Element = getElement();

  return <Element className={styles[getElement()]}>{children}</Element>;

  function getElement() {
    if (variation === "italics") {
      return "em";
    }

    if (variation === "underline") {
      return "u";
    }

    return "strong";
  }
}
