import React, { useState } from "react";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { Link } from "@/components/Link";

import styles from "./Events.module.css";
import { Caption } from "../Caption";
import { eventsWithLocation } from "./eventItemsWithLocation";

const seatsAvailable = "Seats Available";
const moreInfo = "More Information";
const firstMonths = eventsWithLocation.slice(0, 2);

export function Events() {
  const [eventMonths, changeEventsMonth] = useState(firstMonths);
  const [showAllEvents, changeShowAllEvents] = useState(false);

  const onLoadClick = () => {
    changeEventsMonth(eventsWithLocation);
    changeShowAllEvents(true);
  };

  return (
    <>
      <div className={styles.events}>
        {eventMonths.map((event, index) => {
          return (
            <div className={styles.eventMonth}>
              <Heading as="h3">{event.month}</Heading>
              {index !== 0 && <Divider spacing="small" />}
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
      {!showAllEvents && (
        <div className={styles.viewButtonContainer}>
          <button
            className={styles.viewButton}
            type="button"
            onClick={() => onLoadClick()}
          >
            View All
          </button>
        </div>
      )}
    </>
  );
}

interface EventProps {
  readonly name: string;
  readonly url: string;
  readonly date: string;
  readonly location: string;
}

function Event({ name, url, date, location }: EventProps) {
  return (
    <div className={styles.event}>
      <div className={styles.seats}>{seatsAvailable}</div>
      <div className={styles.eventName}>{name}</div>
      <Caption title={date} />
      <Caption title={location} />
      <div className={styles.moreInfo}>
        <Link url={url} external>
          <p className={styles.moreInfoText}>{moreInfo}</p>
        </Link>
      </div>
    </div>
  );
}
