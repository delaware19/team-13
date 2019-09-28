import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach1 from "../InterActiveRoadMap/assets/research_l1.png";
import reseach2 from "../InterActiveRoadMap/assets/research_l2.png";
import reseach3 from "../InterActiveRoadMap/assets/research_l3.png";
import coalition4 from "../InterActiveRoadMap/assets/coalition_l5.png";
import coalition5 from "../InterActiveRoadMap/assets/coalition_l6.png";
import coalition6 from "../InterActiveRoadMap/assets/coalition_l5.png";
import story7 from "../InterActiveRoadMap/assets/story_l7.png";
import story8 from "../InterActiveRoadMap/assets/story_l8.png";
import story9 from "../InterActiveRoadMap/assets/story_l9.png";
import law10 from "../InterActiveRoadMap/assets/law_l10.png";
import law11 from "../InterActiveRoadMap/assets/law_l11.png";
import law12 from "../InterActiveRoadMap/assets/law_l12.png";

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class InterActiveRoadMap extends Component {
  render() {
    return (
      <div>
          <div className = "phase1">
            <h1>Reseach Phase</h1>
            <div>
                  <img src = {reseach1}></img>
                <img src = {reseach2}></img>
                <Link to='/Lv3'>
                    <img src = {reseach3}></img>
                </Link>
            </div>
            
          </div>

          <div className = "phase2">
            <h1>Coalition Building Phase</h1>
                <div>
                 <img src = {coalition4} style = {{filter: "grayscale(100%)"}}></img>
                 <img src = {coalition5} style = {{filter: "grayscale(100%)"}}></img>
                 <img src = {coalition6} style = {{filter: "grayscale(100%)"}}></img>
                </div>
          </div>

          <div className = "phase3"> 
            <h1>Story Telling Phase</h1>
            <div>
                <img src = {story7} style = {{filter: "grayscale(100%)"}}></img>
                <img src = {story8} style = {{filter: "grayscale(100%)"}}></img>
                <img src = {story9} style = {{filter: "grayscale(100%)"}}></img>
            </div>
          </div>

          <div className = "phase4">
            <h1>Law Making Phase</h1>
            <div>
                <img src = {law10} style = {{filter: "grayscale(100%)"}}></img>
                <img src = {law11} style = {{filter: "grayscale(100%)"}}></img>
                <img src = {law12} style = {{filter: "grayscale(100%)"}}></img>
            </div>
          </div>
      </div>
    );
  }
}

export default InterActiveRoadMap;
