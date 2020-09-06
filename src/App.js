import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Footer from './components/Footer';


export function SkillsPage(){
  return(
    <div className="App">
      <Header selected="SKILLS" />
      <Skills />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header selected="ABOUT ME"/>
      <Home />
    </div>
  );
}

export default App;
