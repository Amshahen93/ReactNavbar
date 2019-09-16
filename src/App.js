import React from 'react';
import './App.css';
import NavigationContent from './NavigationContent/NavigationContent';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className = 'container-fluid'>
        <div className = 'row'>
          <div className = 'col-12'>
            <Switch>
              <Route path = '/dashbord' render = {()=> <h1>Dashbord</h1> }/>
              <Route path = '/' component = {NavigationContent}/>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
