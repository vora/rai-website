import React, { useState } from "react";
import { Heading } from "@/components/Heading";
import { Divider } from "@/components/Divider";
import { Event } from "./Event";

import styles from "./Events.module.css";
import { eventsWithLocation } from "./eventItemsWithLocation";

const firstMonths = eventsWithLocation.slice(0, 3);

export function Events() {
  const [eventMonths, setEventsMonth] = useState(firstMonths);
  const [showAllEvents, setShowAllEvents] = useState(false);

  const onLoadClick = () => {
    setEventsMonth(eventsWithLocation);
    setShowAllEvents(true);
  };

  return (
    <>
      <div className={styles.events}>
        {eventMonths.map((event, index) => {
          return (
            <div className={styles.eventMonth} key={event.id}>
              <Heading as="h3">{event.month}</Heading>
              {index !== 0 && <Divider spacing="small" />}
              {event?.events && (
                <div className={styles.list}>
                  {event?.events?.map((item) => (
                    <Event key={item.id} event={item} />
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
