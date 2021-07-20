import React from "react";
import { Container } from "@/components/Container";
import { Caption } from "@/components/Caption";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { Link } from "@/components/Link";

import styles from "./FeaturedPost.module.css";

export function FeaturedPost() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <Caption title="Featured Article" />
          <Heading>
            Independent Certification Working Group Launched for Advancing
            Ethical and Responsible AI
          </Heading>
          <Text>
            Implement AI in a responsible and ethical way with our Responsible
            AI certification, the first independent, accredited program of its
            kind, developed in partnership with the World Economic Forum and
            Schwartz.
          </Text>
          <Link url="/foo" icon="ArrowRight">
            Foo
          </Link>
        </div>
      </Container>
    </div>
  );
}
