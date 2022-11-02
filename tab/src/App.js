import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';
import Tab from './components/Tab';

function App() {
  const [tabs,setTabs]=useState([
    {label:'tab1',content:'this is tab1'},
    {label:'tab2',content:'this is tab2'},
    {label:'tab3',content:'this is tab3'}

  ])
  return (
    <div className="App">
      <Tabs tabs={tabs}/>
      <Tab tabs={tabs} setTabs={setTabs}/>
      
    </div>
  );
}

export default App;
