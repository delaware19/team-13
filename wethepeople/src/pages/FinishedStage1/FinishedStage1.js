import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach1 from "../InterActiveRoadMap/assets/research_l1.png";
import goldStar from "./assets/star.png";
import "./css/FinishedStage1.css";
import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class FinishedStage1 extends Component {
    render() {
        return (
            <div style={{ background: "#E47D5C" }}>
                <Link to='/HomePage'>
                    <Button variant="light" style={{ margin: "20px" }}>
                        Back
                    </Button>
                </Link>
                <div style={{ color: "white" }}>
                    <h1 style={{ textAlign: "center", size: "100px" }}>Congratulations!</h1>
                    <h2 style={{ textAlign: "center" }}>You finished Phase 1 of the Hopenmoics System!<br></br>
                        A Rise team member will be in contact with you to discuss the next stage</h2>
                </div>
                <Container>
                    <Row style={{ paddingTop: "50px", marginBottom: "4px" }}>
                        <Col>
                            <img src={goldStar} style={{ objectFit: "contain", height: "50%" }}></img>
                        </Col>
                        <Col>
                            <h3 style={{ color: "white" }}> We would like to commend you for taking the first steps towards making a real change in your community.
                                <br></br><br></br> The next step will be to schedule a call with one of our staff members.
                            </h3>
                        </Col>
                    </Row>
                </Container>

            </div>
            /*
            <Container>
                    <div>
                        <h1>Congratulations You finished Phase one of the Hopenomics System</h1>
                        <h2>A Rise team member will be in contact with you to discuss the next stage
                        <br></br> of the process.<br></br>We would like to commend you for taking the first steps twords
                        <br></br>making a real change in your community.
                    </h2>
                        <h2>
                            The next step will be to schedule a call with one of our staff members
                    </h2>

                        <h1>Remember that We The People Are Ready to Make a Change</h1>
                    </div>
            </Container>*/
        );
    }
}

export default FinishedStage1;