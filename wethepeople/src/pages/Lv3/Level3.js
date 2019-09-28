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

const Header = styled.div`
padding-top: 30px;
padding-bottom: 15px;
font-size: 30px;
color: white;
`;

const SubHeader = styled.div`
font-size: 20px;
color: white;
`;

const SubHeaderBig = styled.div`
font-size: 20px;
color: white;
width: 100%;
justify-content: center;
display: flex;
align-items: center;

`;

const StyledButton = styled(Button)`

width: 200px;
height: 65px;
margin-right: 20px;
margin-bottom: 20px;
background-color: white; 
color: black;
border-radius: 15px;
border-color: white;
font-size: 18px;
`;

const StyledForm = styled(Form)`
padding-top: 30px;
`;

const StyledContainer = styled(Container)`
display: flex;
flex-direction: wrap;
`;
export class Level3 extends Component{
    render() {
        return (
            <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px"}}>
            <Container>
                
                <img src = {reseach3} style = {{width:"10%", paddingTop: "50px"}}></img>
                    
                    <Header>Confirm Deadlines
                    <br></br>(drafting and introducing bills,
                    <br></br>committee sessions, floor votes)</Header>
                    <StyledContainer>
                <SubHeaderBig>
                    Some things to keep in mind when researching:
                    <br></br>
                    Start of Legislative Session - When the legislative session starts
                    <br></br>
                    Intent to file start 
                    - In many states you must file paper work showing you intend to file a bill
                    <br></br>Bill submission start - When you can start submitting bills to go to committee
                    <br></br>Intent to file deadline - Final day to submit an intent to file
                    <br></br>Bill Submission deadline - Final day to submit a bill
                    <br></br>Committee hearing dates - When Committees start holding hearings on bills
                    <br></br>Floor vote deadline - Last day they will be holding floor votes. 
                    <br></br>End of Legislative Session - Last Day 
                </SubHeaderBig>
                </StyledContainer>
                <StyledForm>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <SubHeader>Start of Legislative Session</SubHeader>
                        <Form.Control type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <SubHeader>Intent to File Start</SubHeader>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <SubHeader>When you can start submitting bills</SubHeader>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <SubHeader>Final Day you can Submit a Bill</SubHeader>
                        <Form.Control type="date" placeholder="Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <SubHeader>Final Day you can Submit a Bill</SubHeader>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <SubHeader>Committee Hearing Dates</SubHeader>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>
                </StyledForm>


                <Link to='/FinishedStage1'>
                    <StyledButton bright="light">Submit!</StyledButton>
                </Link>
            </Container>
            </div>
        );
    }
}

export default Level3;