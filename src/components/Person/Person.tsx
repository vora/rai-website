import React, { useState } from "react";
import { Avatar } from "@/components/Avatar";
import { Modal } from "@/components/Modal";

import styles from "./Person.module.css";

export function Person() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={styles.person} onClick={handleClick}>
        <Avatar name="Eddy Sims" />
        <div className={styles.text}>
          <div className={styles.name}>Person Name</div>Person Role
        </div>
      </button>
      <Modal onClose={handleClick} open={open}>
        Bio Here
      </Modal>
    </>
  );

  function handleClick() {
    setOpen(!open);
  }
}
