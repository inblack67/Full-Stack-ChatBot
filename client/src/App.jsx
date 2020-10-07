import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Room from './components/Room';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:room/:user' component={Room} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
