import React, { Component } from 'react'
import Navigasi from './components/Navigasi';
import Dashboard from './page/Dashboard';
import EventCard from './page/EventCard';
import Formulir from './page/Formulir';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>

      <Navigasi />
      <Switch>
        <Route
          path="/" exact component={EventCard}
        />
        <Route
          path="/Formulir" exact component={Formulir}
        />
        <Route
          path="/Dashboard" exact component={Dashboard}
        />
      </Switch>

    </Router>
  );
}


export default App;
