import React, { useState } from "react";
import { Divider } from "@/components/Divider";
import classNames from "classnames";
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
  const addButtonText = () => {
    return `ADD NEW ${
      tabs.find((tab) => tab.tabName === currentTab)?.tabElements
    }`;
  };

  const firstTab = classNames(styles.buttonContainer, styles.firstButton);

  return (
    <>
      <div className={styles.tabHeader}>
        <div className={styles.tabContainer}>
          {tabs.map((tab, i) => {
            return (
              <div
                className={i === 0 ? firstTab : styles.buttonContainer}
                key={tab.tabName}
              >
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
          <div className={styles.addButtonContainer}>
            <button className={styles.addButton} type="button">
              {addButtonText()}
            </button>
          </div>
        </div>
      </div>
      <Divider spacing="small" />
      {renderTabContent(currentTab)}
    </>
  );
};
