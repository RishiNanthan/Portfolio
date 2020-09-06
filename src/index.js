import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { SkillsPage } from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ SkillsPage } />
      <Route path="/skills" component={ SkillsPage } />
    </Switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);

serviceWorker.unregister();
