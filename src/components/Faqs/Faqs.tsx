import React, { useState, MouseEvent } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@/components/Container";
import { RichText, RichTextContent } from "@/components/RichText";
import { Icon } from "@/components/Icon";
import {
  FaqsQueryQuery,
  QuestionFragmentFragment,
} from "@/graphql/graphql-types";

import styles from "./Faqs.module.css";

export function Faqs() {
  const { questions } = useStaticQuery<FaqsQueryQuery>(graphql`
    query FaqsQuery {
      questions: allContentfulFrequentlyAskedQuestion(
        sort: { order: ASC, fields: updatedAt }
      ) {
        nodes {
          ...QuestionFragment
        }
      }
    }
  `);

  return (
    <Container size="small" className={styles.faqs}>
      {questions.nodes.map((question) => (
        <Question key={question.title} {...question} />
      ))}
    </Container>
  );
}

function Question({ title, content }: QuestionFragmentFragment) {
  const [open, setOpen] = useState(true);
  const icon = open ? "ChevronDown" : "ChevronRight";
  return (
    <details open={open} className={styles.question}>
      <summary className={styles.summary} onClick={handleClick}>
        <Icon icon={icon} />
        {title}
      </summary>
      <RichText content={content as RichTextContent} />
    </details>
  );

  function handleClick(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setOpen(!open);
  }
}

export const FaqFragment = graphql`
  fragment QuestionFragment on ContentfulFrequentlyAskedQuestion {
    title
    content {
      raw
    }
  }
`;
