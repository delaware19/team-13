import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignIn/SignIn';
import SignUP from './pages/SignUp/SignUp';

function App() {
  return (
    <Switch>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route path='/signup'>
      <SignUP />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
