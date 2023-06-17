import React from 'react';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Titlebar from './components/Titlebar';
import Canvas from './pages/Canvas';


const App = () => {


  return (
    <div className="app">
      <Sidebar/>
      <Titlebar/>
      <Canvas/>
    </div>
  );
};

export default App;
