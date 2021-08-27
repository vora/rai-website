import React, { ChangeEvent, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Text } from "@/components/Text";
import { Divider } from "@/components/Divider";
import { Card, CardProps } from "@/components/Card";
import { CardFragmentFragment } from "@/graphql/graphql-types";

export function Cards() {
  const { cards } = useStaticQuery(graphql`
    query AllContentfulCards {
      cards: allContentfulCard {
        nodes {
          ...CardFragment
        }
      }
    }
  `);

  return (
    <div>
      {cards.nodes.map((card: CardFragmentFragment) => (
        <div key={card.title}>
          <Text size="large">Title: {card.title}</Text>
          <div>
            <InternalCard {...card} />
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}

function InternalCard(props: CardProps) {
  const [size, setSize] = useState<"base" | "large">("base");
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <input type="checkbox" onChange={handleChange} />
        Display as large
      </label>
      <Card {...props} size={size} />
    </div>
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSize(e.target.checked ? "large" : "base");
  }
}
