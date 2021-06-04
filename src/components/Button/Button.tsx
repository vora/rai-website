import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";

import styles from "./Button.module.css";

interface ButtonProps {
  /**
   * The content of the Button. We use a title prop over
   * children as we want to limit the content of a button
   * to a string.
   */
  readonly title: string;
  /**
   * The URL a button will link to.
   */
  readonly url: string;
  readonly variation?: "primary" | "inverted";
}

export function Button({ title, url, variation = "primary" }: ButtonProps) {
  const buttonClasses = classnames(styles.button, styles[variation]);

  return (
    <Link to={url} className={buttonClasses}>
      {title}
    </Link>
  );
}
