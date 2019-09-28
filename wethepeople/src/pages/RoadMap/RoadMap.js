import React, { Component } from "react";
import { Button, Row, Col, Container, Carousel } from "react-bootstrap";
//import roadmap from "../HomePage/assets/roadmap.png";
//import styled from "styled-components";
import phase1 from "../HomePage/assets/phase1.png";
import phase2 from "../HomePage/assets/phase2.png";
import phase3 from "../HomePage/assets/phase3.png";
import phase4 from "../HomePage/assets/phase4.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./RoadMap.css"

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class RoadMap extends Component {
  render() {
    return (
      <div style = {{backgroundColor: '#E08874', paddingTop: '100px', paddingBottom: '500px'}}>
        <Link to='/HomePage'>
          <Button variant="light" style = {{margin: "20px"}}>
            Back
          </Button>
        </Link>
        
        <Container>
        <h1 class="ui header" style = {{color: 'white'}}>Scroll for an overview!</h1>
          <Carousel>
            <Carousel.Item>
              <img
              className="d-block w-100"
              src={phase1}
              alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={phase2}
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={phase3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={phase4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
          
      </div>
    );
  }
}

export default RoadMap;
