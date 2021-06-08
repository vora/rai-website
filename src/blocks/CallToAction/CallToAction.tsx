import React from "react";
import { Container } from "@/components/Container";
import { Button, ButtonProps } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { RichText, RichTextContent } from "@/components/RichText";

import styles from "./CallToAction.module.css";

interface CallToActionProps {
  readonly title: string;
  readonly content: RichTextContent;
  readonly action: Pick<ButtonProps, "title" | "url">;
}

export function CallToAction({ title, content, action }: CallToActionProps) {
  return (
    <Container>
      <div className={styles.cta}>
        <Heading>{title}</Heading>
        <div className={styles.content}>
          <RichText size="large" content={content} />
        </div>
        <Button title={action.title} url={action.url} variation="inverted" />
      </div>
    </Container>
  );
}
