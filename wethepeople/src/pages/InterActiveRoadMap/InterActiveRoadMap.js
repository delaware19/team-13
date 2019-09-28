import React, { Component, Row, Col, Container } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
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

const Header = styled.div`
padding-top: 30px;
padding-bottom: 15px;
font-size: 60px;
color: white;
`;

const Phase = styled.div`
padding-bottom: 30px;

`;

export class InterActiveRoadMap extends Component {
  render() {
    return (
      <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px"}}>
          
          <div className = "phase1">
            <Header>Reseach Phase</Header>
            <Phase>
                <Link to='/Lv1'>
                    <img src = {reseach1} style = {{width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                </Link>
                <img src = {reseach2} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                <img src = {reseach3} style = {{filter: "grayscale(100%)",  width: "200px", height:"200px", borderRadius: "50px",}}></img>
            </Phase>
            
          </div>

          <div className = "phase2">
            <Header>Coalition Building Phase</Header>
                <Phase>
                 <img src = {coalition4} style = {{filter: "grayscale(100%)",  width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                 <img src = {coalition5} style = {{filter: "grayscale(100%)",  width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                 <img src = {coalition6} style = {{filter: "grayscale(100%)",  width: "200px", height:"200px", borderRadius: "50px",}}></img>
                </Phase>
          </div>

          <div className = "phase3"> 
            <Header>Story Telling Phase</Header>
            <Phase>
                <img src = {story7} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                <img src = {story8} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                <img src = {story9} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", borderRadius: "50px",}}></img>
            </Phase>
          </div>

          <div className = "phase4">
            <Header>Law Making Phase</Header>
            <Phase>
                <img src = {law10} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                <img src = {law11} style = {{filter: "grayscale(100%)",width: "200px", height:"200px", marginRight: "100px", borderRadius: "50px",}}></img>
                <img src = {law12} style = {{filter: "grayscale(100%)", width: "200px", height:"200px", borderRadius: "50px", }}></img>
            </Phase>
          </div>
      </div>
    );
  }
}

export default InterActiveRoadMap;
