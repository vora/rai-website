import React from "react";
import { graphql } from "gatsby";
import { ListOfCardsFragmentFragment } from "@/graphql/graphql-types";
import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import classNames from "classnames";
import { Container } from "@/components/Container";
import styles from "./ListOfCards.module.css";

export function ListOfCards({
  title,
  variation,
  cards,
}: ListOfCardsFragmentFragment) {
  const wrapperClass = classNames({
    [styles.list]: variation === "List",
  });

  return (
    <div className={wrapperClass}>
      <Container>
        {title && (
          <>
            <Heading>{title}</Heading>
            <Divider />
          </>
        )}
        <div className={styles.cards}>
          {cards?.map((card) => (
            <Card
              {...card}
              key={card.title}
              size={variation === "List" ? "large" : "base"}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export const ListOfCardsFragment = graphql`
  fragment ListOfCardsFragment on ContentfulBlockListOfCards {
    __typename
    id
    title
    variation
    cards {
      ...CardFragment
    }
  }
`;
