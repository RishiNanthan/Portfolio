import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Footer from './components/Footer';

import './App.css';


function SkillsPage(){
  return(
    <div className="App">
      <Header selected="SKILLS" />
      <Skills />
      <Footer />
    </div>
  );
}

function HomePage(){
  return(
    <div className="App">
      <Header selected="ABOUT ME" />
      <Home />
    </div>
  );
}


function ProjectsPage(){
  return (
    <div className="App">
      <Header selected="PROJECTS" />

      <Footer />
    </div>
  );
}


function ContactPage(){
  return (
    <div className="App">
      <Header selected="CONTACT" />
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/skills" component={ SkillsPage } />
        <Route path="/projects" component={ ProjectsPage } />
        <Route path="/contact" component={ ContactPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
