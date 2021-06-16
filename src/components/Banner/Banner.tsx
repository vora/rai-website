import React from "react";
import { Text } from "../Text";

import styles from "./Banner.module.css";

interface BannerProps {
  /**
   * The title string that will render inside the Banner
   */
  readonly title: string;
  readonly ariaLabel?: string;
}

export function Banner({ title, ariaLabel }: BannerProps) {
  return (
    <div className={styles.banner} role="alert" aria-label={ariaLabel}>
      <Text size="small">{title}</Text>
    </div>
  );
}
