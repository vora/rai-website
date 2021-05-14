import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { Breakpoints, useResizeObserver } from "@/hooks/useResizeObserver";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";

import * as styles from "./Footer.module.css";

const menuItems = [
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "RAI Certification",
    url: "/certification",
  },
  {
    title: "Programs and Tools",
    url: "/tools",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "About RAI",
    url: "/about",
  },
  {
    title: "Become a Member",
    url: "/membership",
    highlight: true,
  },
];

export function Footer() {
  const { ref, width } = useResizeObserver();
  const isLarge = width >= Breakpoints.large;

  return (
    <footer className={styles.footer} ref={ref}>
      <Container
        flex={width >= Breakpoints.medium}
        justifyContent="spaceBetween"
        alignItems={isLarge ? "center" : "flexStart"}
      >
        <Link to="/" aria-label="Responsible AI Home">
          <Logo size={isLarge ? "base" : "small"} variation="inverted" />
        </Link>
        <nav className={styles.nav} aria-label="Footer Navigation">
          <ul className={styles.list}>
            {menuItems.map((item) => {
              const linkClass = classnames(styles.link, {
                [styles.highlight]: item.highlight,
              });

              return (
                <li className={styles.item}>
                  <Link to={item.url} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
      <Container>
        <nav className={styles.social} aria-label="Responsible AI Social Media">
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href="https://twitter.com/ResponsibleAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className={styles.link}
              >
                <Icon icon="Twitter" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.linkedin.com/company/responsible-ai-institute/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className={styles.link}
              >
                <Icon icon="Linkedin" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.facebook.com/RAI-Institute-101416012057802"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Facebook"
                className={styles.link}
              >
                <Icon icon="Facebook" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="https://www.instagram.com/responsible.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className={styles.link}
              >
                <Icon icon="Instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
