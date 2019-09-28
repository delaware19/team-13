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


export class Level2 extends Component{
    render() {
        return (
            <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px"}}>
            <Container >
                <img src = {reseach2} style = {{width:"10%", paddingTop: "50px"}}></img>
                <p>Research The Legeslative Landscape in Your State</p>
                <p>
                    For this section you will need to some local laws pertaining you your topic.
                </p>
                <p>
                    Lets start with 3! (Enter the link to the law's website in the text-box)
                </p>

                <Form>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Law 1
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Notes
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>
                    

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Law 2
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Notes
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Law 3
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="URL" placeholder="URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Notes
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control as="textarea" rows="3" />
                        </Col>
                    </Form.Group>
                </Form>
                <Link to='/InterActiveRoadMap3'>
                    <Button bright="light">Submit!</Button>
                </Link>
            </Container>
            </div>
        );
    }
}

export default Level2;