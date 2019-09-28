import React, { Component }  from "react";
import {Button, Form, Col, Container} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach3 from "../InterActiveRoadMap/assets/research_l3.png";

import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class Level3 extends Component{
    render() {
        return (
            <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px"}}>
            <Container>
                <img src = {reseach3} style = {{width:"10%", paddingTop: "50px"}}></img>
                    <p>Confirm Deadlines
                    <br></br>(drafting and introducing bills,
                    <br></br>committee sessions, floor votes)</p>
                <p>
                    It's time to do some research and enter your important deadlines
                    <br></br>Some things to keep in mind when researching:
                    <br></br>-Start of Legislative Session - When the legislative session starts
                    <br></br>Intent to file start - In many states you must file paper work showing you intend to file a bill
                    <br></br>Bill submission start - When you can start submitting bills to go to committee
                    <br></br>Intent to file deadline - Final day to submit an intent to file
                    <br></br>Bill Submission deadline - Final day to submit a bill
                    <br></br>Committee hearing dates - When Committees start holding hearings on bills
                    <br></br>Floor vote deadline - Last day they will be holding floor votes. 
                    <br></br>End of Legislative Session - Last Day 
                </p>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Start of Legislative Session</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Intent to File Start</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>When you can start submitting bills</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Final Day you can Submit a Bill</Form.Label>
                        <Form.Control type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Final Day you can Submit a Bill</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Committee Hearing Dates</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>
                </Form>


                <Link to='/FinishedStage1'>
                    <Button bright="light">Submit!</Button>
                </Link>
            </Container>
            </div>
        );
    }
}

export default Level3;