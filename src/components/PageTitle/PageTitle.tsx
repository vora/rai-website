import React from "react";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Button, ButtonProps } from "@/components/Button";

import styles from "./PageTitle.module.css";

interface PageTitleProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly action?: ButtonProps;
}

export function PageTitle({ title, subtitle, action }: PageTitleProps) {
  return (
    <div className={styles.title}>
      <Heading as="h1">{title}</Heading>
      {subtitle && <Text size="large">{subtitle}</Text>}
      {action && <Button {...action} />}
    </div>
  );
}
