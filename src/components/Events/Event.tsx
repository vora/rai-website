import React from "react";
import { Link } from "@/components/Link";
import { Caption } from "@/components/Caption";

import styles from "./Events.module.css";

interface EventProps {
  event: Event;
}

interface Event {
  readonly name: string;
  readonly url: string;
  readonly date: string;
  readonly location: string;
}

export const Event = ({ event }: EventProps) => {
  const seatsAvailable = "Seats Available";
  const moreInfo = "More Information";

  return (
    <div className={styles.event}>
      <div className={styles.seats}>{seatsAvailable}</div>
      <div className={styles.eventName}>{event.name}</div>
      <Caption title={event.date} />
      <Caption title={event.location} />
      <div className={styles.moreInfo}>
        <Link url={event.url} external>
          <p className={styles.moreInfoText}>{moreInfo}</p>
        </Link>
      </div>
    </div>
  );
};
