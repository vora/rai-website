import React from "react";
import { graphql, Link } from "gatsby";
import { Breakpoints, useResizeObserver } from "@/hooks/useResizeObserver";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

import styles from "./Footer.module.css";

export function Footer() {
  const { ref, width } = useResizeObserver();
  const isLarge = width >= Breakpoints.large;
  const copyrightText =
    "Copyright © 2017-21 by Responsible AI Institute.  All rights reserved. ";

  return (
    <footer className={styles.footer} ref={ref}>
      <Container className={styles.container}>
        <Link to="/" aria-label="Responsible AI Home">
          <Logo size={isLarge ? "base" : "small"} variation="inverted" />
        </Link>
        <p className={styles.copyright}>{copyrightText}</p>
        <Link className={styles.link} to="/" aria-label="Privacy Policy">
          <p>Privacy Policy</p>
        </Link>
        <Link className={styles.link} to="/" aria-label="Terms of Use">
          <p>Terms of Use</p>
        </Link>
        <div className={styles.footerButton}>
          <Link className={styles.buttonLink} to="/">
            <p className={styles.footerButtonText}>CONTACT US</p>
          </Link>
        </div>
        <div className={styles.footerButton}>
          <Link className={styles.buttonLink} to="/">
            <p className={styles.footerButtonText}>VISIT OUR MAIN SITE</p>
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export const FooterNavigationItem = graphql`
  fragment FooterNavigationItem on ContentfulNavigationItem {
    title
    highlight
    link {
      slug
    }
  }
`;
