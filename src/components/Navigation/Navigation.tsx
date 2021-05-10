import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { Breakpoints, useResizeObserver } from "@/hooks/useResizeObserver";
import { AnimatePresence, motion } from "framer-motion";

import * as styles from "./Navigation.module.css";

const menuItems = [
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
    items: [
      {
        title: "Blog",
        url: "/blog",
      },
      {
        title: "Events Calendar",
        url: "/calendar",
      },
    ],
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

export function Navigation() {
  const { ref, width } = useResizeObserver();
  const isLarge = width >= Breakpoints.large;

  return (
    <header ref={ref} className={styles.navigation}>
      <Container flex justifyContent="spaceBetween">
        <Link to="/" aria-label="Responsible AI - Home Page">
          <Logo size={isLarge ? "base" : "small"} />
        </Link>

        <nav className={isLarge ? styles.large : undefined}>
          {isLarge ? <Menu items={menuItems} /> : <MobileMenu />}
        </nav>
      </Container>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const closeButtonClass = classnames(styles.button, styles.buttonOpen);

  return (
    <>
      <button
        type="button"
        aria-label="Open mobile navigation"
        onClick={handleToggle}
        className={styles.button}
      >
        <Icon icon="Menu" size="large" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, top: "-10vh" }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: "-10vh" }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={styles.mobileContainer}
          >
            <Menu items={menuItems} />
            <button
              type="button"
              aria-label="Close mobile navigation"
              onClick={handleToggle}
              className={closeButtonClass}
            >
              <Icon icon="XCircle" size="large" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  function handleToggle() {
    setOpen(!open);
  }
}

interface MenuLinkProps {
  readonly title: string;
  readonly url: string;
}

interface MenuItemProps extends MenuLinkProps {
  readonly highlight?: boolean;
  readonly items?: MenuLinkProps[];
}

interface MenuProps {
  readonly items: MenuItemProps[];
}
function Menu({ items }: MenuProps) {
  if (!items) {
    return <></>;
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const linkClass = classnames(styles.link, {
          [styles.linkHighlight]: item.highlight,
        });

        return (
          <li className={styles.item}>
            <Link to={item.url} className={linkClass}>
              {item.title}
            </Link>

            {item.items && (
              <ul className={styles.subList}>
                {item.items.map((subItem) => {
                  return (
                    <li className={styles.subItem}>
                      <Link to={item.url} className={styles.subLink}>
                        {subItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
