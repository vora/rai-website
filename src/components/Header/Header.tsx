import React from "react";
import { Navigation } from "../Navigation";

import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(/image/header.png)`,
        height: "401px",
      }}
    >
      <Navigation />
      {title && <div className={styles.headerTitle}>{title}</div>}
      {description && (
        <div className={styles.headerDescription}>{description}</div>
      )}
    </div>
  );
};
