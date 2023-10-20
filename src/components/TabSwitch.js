import React from 'react';

const TabSwitch = ({ activeTab, onTabChange }) => {
  return (
    <div>
      <button onClick={() => onTabChange('table')} disabled={activeTab === 'table'}>
        Table
      </button>
      <button onClick={() => onTabChange('chart')} disabled={activeTab === 'chart'}>
        Chart
      </button>
    </div>
  );
};

export default TabSwitch;