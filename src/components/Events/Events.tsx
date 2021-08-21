import React from "react";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { Link } from "@/components/Link";
import { events } from "./eventItems";

import styles from "./Events.module.css";
import { Caption } from "../Caption";

export function Events() {
  return (
    <div className={styles.events}>
      {events.map((event) => {
        return (
          <div className={styles.event}>
            <Heading as="h3">{event.month}</Heading>
            <Divider spacing="small" />
            {event?.events && (
              <div className={styles.list}>
                {event?.events?.map((item) => (
                  <Event {...item} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface EventProps {
  readonly name: string;
  readonly url: string;
  readonly date: string;
}

function Event({ name, url, date }: EventProps) {
  return (
    <div>
      <Link url={url} external>
        {name}
      </Link>
      <Caption title={date} />
    </div>
  );
}
