import React from "react";
import { graphql } from "gatsby";
import {
  MembersBlockFragmentFragment,
  MemberFragmentFragment,
} from "@/graphql/graphql-types";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { Image } from "@/components/Image";
import classNames from "classnames";
import styles from "./Members.module.css";

export function Members({ title, members }: MembersBlockFragmentFragment) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Divider />
      {members?.map((member) => (
        <div className={styles.member}>
          <Member {...member} />
        </div>
      ))}
    </Container>
  );
}

export const MembersBlockFragment = graphql`
  fragment MembersBlockFragment on ContentfulBlockMembers {
    __typename
    id
    title
    members {
      ...MemberFragment
    }
  }
`;

function Member({ title, members }: MemberFragmentFragment) {
  const listClasses = classNames(styles.list, {
    [styles.hasThree]: members?.length === 3,
  });

  return (
    <div>
      <Heading as="h3">{title}</Heading>
      {members && (
        <div className={listClasses}>
          {members.map((member) => (
            <div className={styles.item}>
              <Image {...member} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const MemberFragment = graphql`
  fragment MemberFragment on ContentfulMembersGroup {
    title
    members {
      title
      description
      gatsbyImageData(
        placeholder: TRACED_SVG
        width: 150
        formats: [WEBP, AUTO]
      )
    }
  }
`;
