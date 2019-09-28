import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import InterActiveRoadMap from './pages/InterActiveRoadMap/InterActiveRoadMap';
import InterActiveRoadMap2 from './pages/InterActiveRoadMap2/InterActiveRoadMap2';
import InterActiveRoadMap3 from './pages/InterActiveRoadMap3/InterActiveRoadMap3';
import RoadMap from './pages/RoadMap/RoadMap';
import Level1 from './pages/Lv1/Level1';
import Level2 from './pages/Lv2/Level2';
import Level3 from './pages/Lv3/Level3';
import Finish1 from './pages/FinishedStage1/FinishedStage1';


function App() {
  return (
    <Switch>
      <Route path='/FinishedStage1'>
        <Finish1 />
      </Route>
      <Route path='/Lv3'>
        <Level3 />
      </Route>
      <Route path='/Lv2'>
        <Level2 />
      </Route>
      <Route path='/Lv1'>
        <Level1 />
      </Route>
      <Route path='/InterActiveRoadMap3'>
        <InterActiveRoadMap3 />
      </Route>
      <Route path='/InterActiveRoadMap2'>
        <InterActiveRoadMap2 />
      </Route>
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
      <SignUp />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
