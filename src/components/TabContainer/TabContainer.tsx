import React, { useState } from "react";
import { Divider } from "@/components/Divider";
import { Tab } from "../../types/tab";
import styles from "./TabContainer.module.css";

interface TabContainerProps {
  tabs: Tab[];
  addDivider?: boolean;
}

export const TabContainer = ({ tabs, addDivider }: TabContainerProps) => {
  const [currentTab, setCurrentTab] = useState(
    (tabs[0] && tabs[0].tabName) || ""
  );

  const renderTabContent = (currTab: string) => {
    return tabs.find((tab) => tab.tabName === currTab)?.tabContent || <div />;
  };

  return (
    <>
      <div className={styles.tabContainer}>
        {tabs.map((tab) => {
          return (
            <div className={styles.buttonContainer}>
              <button
                className={
                  tab.tabName === currentTab
                    ? styles.tabButtonActive
                    : styles.tabButton
                }
                type="button"
                onClick={() => setCurrentTab(tab.tabName)}
              >
                {tab.tabName}
              </button>
            </div>
          );
        })}
      </div>
      {addDivider && <Divider spacing="small" />}
      {renderTabContent(currentTab)}
    </>
  );
};
