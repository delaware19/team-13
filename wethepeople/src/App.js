import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignIn/SignIn';
import SignUP from './pages/SignUp/SignUp';
import InterActiveRoadMap from './pages/InterActiveRoadMap/InterActiveRoadMap';
import RoadMap from './pages/RoadMap/RoadMap';


function App() {
  return (
    <Switch>
      <Route path='/InterActiveRoadMap'>
        <InterActiveRoadMap />
      </Route>
      <Route path='/roadMap'>
        <RoadMap />
      </Route>
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
