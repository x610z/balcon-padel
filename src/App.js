import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Common from './components/common/index.js';
import About from './components/pages/about/About';
import Schedule from './components/pages/schedule/Schedule';
import HomePage from './components/pages/home/Home';



function App() {

  return (
    <Router>
      <div className="App">
        <Common />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/acerca" component={About} />
          <Route path="/turnos" component={Schedule} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
