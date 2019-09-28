import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
//import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class InterActiveRoadMap2 extends Component {
  render() {
    return (
      <div>
          <div className = "phase1">
            <h1>Reseach Phase</h1>
            <div>
                
            </div>
            
          </div>

          <div className = "phase2">
            <h1>Coalition Building Phase</h1>
          </div>

          <div className = "phase3"> 
            <h1>Story Telling Phase</h1>
          </div>

          <div className = "phase4">
            <h1>Law Making Phase</h1>
          </div>
      </div>
    );
  }
}

export default InterActiveRoadMap2;
