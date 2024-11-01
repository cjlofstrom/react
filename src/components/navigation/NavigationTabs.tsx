import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";

const NavigationTabs = () => {
  return (
    <Tabs aria-label="Navigation tabs" color="primary">
      <Tab key="overview" title="Overview">
        Overview content
      </Tab>
      <Tab key="analytics" title="Analytics">
        Analytics content
      </Tab>
      <Tab key="reports" title="Reports">
        Reports content
      </Tab>
    </Tabs>
  );
};

export default NavigationTabs;