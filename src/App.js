import React, { useState } from 'react';
import DataTable from './components/DataTable';
import LineChart from './components/LineChart';
import TabSwitch from './components/TabSwitch';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('table');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="personal-details">
        <h1>Arthashastra Web App</h1>
        <p>Name: Sonendra Singh</p>
        <p>Email: sonendraelon@gmail.com</p>
        <p>Contact Number: 7489111676</p>
      </div>
      <TabSwitch activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'table' ? <DataTable /> : <LineChart />}
    </div>
  );
};

export default App;