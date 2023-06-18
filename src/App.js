import React, { useContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Titlebar from './components/Titlebar';
import Canvas from './pages/Canvas';



const App = () => {
  // const UserContext = useContext();


  return (
    // <UserContext.Provider value={[collapsed, setCollapsed]}>
    <div className="app">
      <div className={`sidebar-grid`}><Sidebar/></div>
      <div className='title-main'>
        <div className='titlebar-grid'><Titlebar/></div>
        <div className='canvas-grid'><Canvas/></div>
      </div>
      
    </div>
    // </UserContext.Provider>
  );
};

export default App;
