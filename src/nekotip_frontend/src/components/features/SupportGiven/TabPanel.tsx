import React from 'react';

import { TabPanelProps } from '@/types';

const TabPanel = ({ tabs }: TabPanelProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`mb-2 px-4 py-2 font-semibold ${
              activeTab === index
                ? 'rounded-md bg-thirdAccent shadow-hover'
                : 'text-title'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabPanel;
