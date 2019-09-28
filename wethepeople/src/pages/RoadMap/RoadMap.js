import React, { Component } from "react";
import {Button } from "react-bootstrap";
import roadmap from "../HomePage/assets/roadmap.png";
//import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class RoadMap extends Component {
  render() {
    return (
      <>
      <img src = {roadmap}></img>
      <Link to='/HomePage'>
            <Button variant="Light" type="back">
             Back
             </Button>
            </Link>
        </>
    );
  }
}

export default RoadMap;
