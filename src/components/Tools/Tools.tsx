import React from "react";
import programs from "./tools.png";
import styles from "./Tools.module.css";
import { defaultTools } from "./defaultTools";
import { ToolCard } from "./ToolCard";

export const Tools = () => {
  return (
    <>
      <img className={styles.toolImage} src={programs} alt="RAI Programs" />
      <div className={styles.toolsContent}>
        {defaultTools.map((tool) => (
          <ToolCard tool={tool} />
        ))}
      </div>
    </>
  );
};
