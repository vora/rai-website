import React from "react";
import { graphql } from "gatsby";
import { Heading } from "@/components/Heading";
import { ListOfPeopleFragmentFragment } from "@/graphql/graphql-types";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/Container";
import { Person } from "@/components/Person";

import styles from "./ListOfPeople.module.css";

interface ListOfPeopleProps {
  data: ListOfPeopleFragmentFragment;
}
export function ListOfPeople({ data }: ListOfPeopleProps) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Heading>{data.title}</Heading>
        <Divider />
        {data?.people && (
          <div className={styles.people}>
            {data.people.map((person) => {
              return <Person {...person} />;
            })}
            {data?.includeInterestedInJoiningButton && (
              <Person
                name="Interested in joining RAI?"
                userRole="Inquire Here"
              />
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export const ListOfPeopleFragment = graphql`
  fragment ListOfPeopleFragment on ContentfulBlockListOfPeople {
    __typename
    id
    title
    includeInterestedInJoiningButton
    people {
      ...PeopleFragment
    }
  }
`;
