import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard.js";
import ProjectDetatils from "./components/projects/ProjectDetails.js";
import SignedIn from "./components/auth/SignedIn.js"
import SignedUp from "./components/auth/SignedUp.js";
import CreateProject from "./components/projects/CreateProject.js";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path = "/" component ={Dashboard}/>
                <Route path = "/projects/:id" component = {ProjectDetatils}/>
                <Route path = "/signin" component = {SignedIn}/>
                <Route path = "/signup" component = {SignedUp}/>
                <Route path = "/create" component = {CreateProject}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
