import React, { useState } from "react";
import { Divider } from "@/components/Divider";
import { Tab } from "../../types/tab";
import styles from "./TabContainer.module.css";

interface TabContainerProps {
  tabs: Tab[];
}

export const TabContainer = ({ tabs }: TabContainerProps) => {
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
            <div className={styles.buttonContainer} key={tab.tabName}>
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
      <Divider spacing="small" />
      {renderTabContent(currentTab)}
    </>
  );
};
