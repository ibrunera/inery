import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateMedicine from './pages/admin/CreateMedicine';
import HomePage from './pages/admin/HomePage';
import LoginPage from './pages/admin/LoginPage';
import CreatePacient from './pages/CreatePacient';
import LandingPage from './pages/LandingPage';
import MedicineUpdate from './pages/admin/MedicineUpdate';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/pacient/create" component={CreatePacient} />
        <Route path="/admin/" exact component={LoginPage} />
        <Route path="/admin/home" component={HomePage} />
        <Route path="/admin/medicine/create/" component={CreateMedicine} />
        <Route path="/admin/medicine/update/:id" component={MedicineUpdate} />
        
      </Switch>
    </BrowserRouter>
  )
}