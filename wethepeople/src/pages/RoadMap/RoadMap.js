import React, { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
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
      <>
        <Link to='/HomePage'>
          <Button variant="primary" style = {{margin: "20px"}}>
            Back
          </Button>
        </Link>
        <Container style = {{padding: "20px"}}>
          <Row>
            <Col>
              <img src={phase1}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={phase2}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={phase3}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={phase4}></img>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RoadMap;
