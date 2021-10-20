import React from "react";
import { Link } from "@/components/Link";
import { Tool } from "../../types/tool";
import styles from "./Tools.module.css";

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const toolButtonText = "GET STARTED";

  return (
    <div className={styles.toolContainer}>
      <img className={styles.itemImage} src={tool.icon} alt="icon" />
      <div>
        <p className={styles.toolTitle}>{tool.header}</p>
        <div style={{ height: "90px" }}>
          <p className={styles.toolDescription}>{tool.description}</p>
        </div>
        <div className={styles.toolButton}>
          <Link url={tool.link}>
            <p className={styles.toolButtonText}>{toolButtonText}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
