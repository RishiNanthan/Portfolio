import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header selected="SKILLS"/>
      <Skills />
    </div>
  );
}

export default App;
