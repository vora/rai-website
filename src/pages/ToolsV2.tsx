import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import { Tools } from "@/components/Tools";
import { TabContainer } from "@/components/TabContainer";
import React from "react";
import { Tab } from "../types/tab";

const ToolsV2 = () => {
  const toolTitle = "Tools and Program";
  const toolDescription =
    "RAI is defining responsible AI with an independent, authoritative certification program, and practical guidance on data rights, privacy, security, explainability, and fairness in AI systems. No matter where you are on your AI journey, our programs and services can help. From network, educate, assess, and certify, we have you covered.";

  const contentTabs: Tab[] = [
    {
      tabName: "Tools",
      tabContent: <Tools />,
    },
    {
      tabName: "Programs",
      tabContent: <div />,
    },
  ];

  return (
    <Layout
      title="Programs and Tools"
      headerTitle={toolTitle}
      headerDescription={toolDescription}
    >
      <Container>
        <TabContainer tabs={contentTabs} />
      </Container>
    </Layout>
  );
};

export default ToolsV2;
