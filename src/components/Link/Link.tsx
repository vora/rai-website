import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import { Link as GatsbyLink } from "gatsby";
import { Icon, IconType } from "@/components/Icon";
import { XOR } from "ts-xor";

import styles from "./Link.module.css";

interface BaseLinkProps {
  readonly url: string;
  /**
   * Should the link open in a new tab. This should be only
   * used for navigating to a new domain.
   */
  readonly external?: boolean;
}

interface LinkWithIconProps extends BaseLinkProps {
  readonly icon: IconType;
  readonly iconOnRight?: boolean;
}

export type LinkProps = XOR<BaseLinkProps, LinkWithIconProps>;

export function Link({
  external = false,
  url,
  children,
  icon,
  iconOnRight,
}: PropsWithChildren<LinkProps>) {
  const iconClass = classnames(styles.icon, {
    [styles.iconOnRight]: iconOnRight,
  });

  if (external) {
    return (
      <a href={url} target="_blank" className={styles.link} rel="noreferrer">
        <LinkInternals />
      </a>
    );
  }

  return (
    <GatsbyLink className={styles.link} to={url}>
      <LinkInternals />
    </GatsbyLink>
  );

  function LinkInternals() {
    return (
      <>
        {children}
        {icon && (
          <span className={iconClass}>
            <Icon icon={icon} size="small" />
          </span>
        )}
      </>
    );
  }
}
