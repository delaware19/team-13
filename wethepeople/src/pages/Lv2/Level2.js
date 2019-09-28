import React, { Component }  from "react";
import {Button, Form, Col, Row, Container} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach2 from "../InterActiveRoadMap/assets/research_l2.png";

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

const Align = styled.div`
display: flex;
justify-content: center;
padding-bottom: 600px;
padding-top: 30px;
`;

export class Level2 extends Component{
    render() {
        return (
            <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px", borderRoadius: "50px",}}>
            <Container >
                <img src = {reseach2} style = {{width:"10%", paddingTop: "50px"}}></img>
                <Header>Research the Legislative Landscape in Your State</Header>
                <Header>
                    For this section you will need to find some local laws pertaining your topic.
                </Header>
                <Header>
                    Let's start with 3! (Enter the link to the law's website in the text-box)
                </Header>

                <Form>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Law 1
                        </SubHeader>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Notes
                       </SubHeader>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>
                    

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Law 2
                        </SubHeader>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Notes
                        </SubHeader>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Law 3
                        </SubHeader>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <SubHeader column sm="2">
                        Notes
                        </SubHeader>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>
                </Form>
                <Link to='/InterActiveRoadMap3'>
                    <StyledButton bright="light">Submit!</StyledButton>
                </Link>
            </Container>
            </div>
        );
    }
}

export default Level2;