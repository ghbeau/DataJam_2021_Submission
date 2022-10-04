import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import Nav from './nav/nav'
import Profile from './profile/profile'
import Directory from './directory/directory'
import IncidentForm from './incident-form/incidentForm'
import { ReactComponent as HomeLogo } from './homeImage.svg';

const platformTitle = 'The Centre for Cross-Network Trafficking Data'

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Route exact path="/">
        <h1>Welcome to {platformTitle}</h1>
        <HomeLogo />
      </Route>
      <Route exact path="/incidentGraph">
        <iframe width="100%" frameborder="no" src="https://niranjani.shinyapps.io/resources_map/"> </iframe>
      </Route>
      <Route exact path="/crime">
        <iframe width="100%" frameborder="no" src="https://niranjani.shinyapps.io/dashdisplay/"> </iframe>
      </Route>
      <Route exact path="/form">
        <IncidentForm />
      </Route>
      <Route exact path="/directory">
        <Directory/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
