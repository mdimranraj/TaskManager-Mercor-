import React from 'react';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Titlebar from './components/Titlebar';


const App = () => {


  return (
    <div className="app">
      <Sidebar/>
      <Titlebar/>
      <Home/>
    </div>
  );
};

export default App;
