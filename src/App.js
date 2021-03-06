import React, { useState } from 'react';

import Dashboard from './pages/Dashboard';
import Documentation from './pages/Documentation';
import Project from './pages/Project';
import {Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss'


function App() {
  const[plant, setPlant] = useState('basil')

  return (
    <div className="app-wrapper">
      <Router>
        <Route path="/" exact render={() => <Dashboard plant={plant} setPlant={setPlant}/>}/>
        <Route path="/documentation" render={() => <Documentation/>}/>
        <Route path="/project" render={() => <Project/>}/>
      </Router>
    </div>
  );
}


export default App;
