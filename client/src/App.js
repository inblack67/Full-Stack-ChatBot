import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import io from 'socket.io-client';

import Home from './components/Home';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
import './App.css';

let socket;

const App = () => {
  useEffect(() => {
    M.AutoInit();
    socket = new io('http://localhost:5000');
  }, []);

  useEffect(() => {
    socket.on('intro', (message) => {
      console.log(message);
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
