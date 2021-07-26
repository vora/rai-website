import React from "react";
import { Caption } from "@/components/Caption";
import { SocialShare } from "@/components/SocialShare";

import styles from "./PostMeta.module.css";

interface PostMetaProps {
  readonly date: string;
}

export function PostMeta({ date }: PostMetaProps) {
  return (
    <div className={styles.meta}>
      <Caption title={date} />
      <SocialShare />
    </div>
  );
}
