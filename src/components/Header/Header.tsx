import React from "react";
import { Navigation } from "@/components/Navigation";

import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <Navigation />
      {title && <div className={styles.headerTitle}>{title}</div>}
      {description && (
        <div className={styles.headerDescription}>{description}</div>
      )}
    </div>
  );
};
