import React from 'react';
import styles from './ServiceDesc.module.scss';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

interface ServiceDescProps {
  tabTitles: string[];
  tabDescriptions: string[];
}

export const ServiceDesc: React.FC<ServiceDescProps> = ({
  tabTitles,
  tabDescriptions,
}: ServiceDescProps) => {
  return (
    <div className={styles.container}>
      <TabGroup className={styles.tabSection}>
        <TabList className={styles.tabList}>
          <div className={styles.tabContainer}>
            {tabTitles.map((title, index) => (
              <Tab key={index} className={styles.tab}>
                {title}
              </Tab>
            ))}
          </div>
        </TabList>
        <TabPanels>
          {tabDescriptions.map((description, index) => (
            <TabPanel key={index}>
              <h2 className={styles.titleTab}>{tabTitles[index]}</h2>
              <h3 className={styles.description}>{description}</h3>
              <a href="" className={styles.contactButtonTab}>
                Contact Us
              </a>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
