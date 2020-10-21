import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import CreatePacient from './pages/CreatePacient';
import LandingPage from './pages/LandingPage';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/pacient/create" component={CreatePacient} />
      </Switch>
    </BrowserRouter>
  )
}