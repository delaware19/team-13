import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

const StyledContainer = styled(Container)`
background-color: #E47D5C;
width: 100%;
padding: 20px;
padding-bottom: 1000px;
padding-top: 100px;
max-width: 1700px;
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
font-size: 20px;
`;

const Align = styled.div`
display: flex;
justify-content: center;
padding-bottom: 600px;
`;


export class SignUp extends Component {
  render() {
    return(
    <>
        <h1 style = {{backgroundColor:  "#E47D5C", textAlign: "center", marginBottom: "0px"}}>Your Journey Starts Here</h1>
      <StyledContainer>
        <Form>
          <Form.Group controlId="nameAndContact">
            <Form.Row>
              <Col>
                <Form.Control placeholder="First name" />
                <Form.Label>First Name</Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
                <Form.Label>Last Name</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Email Address</Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="xxx-xxx-xxxx" />
                <Form.Label>Mobile</Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="State" />
                <Form.Label>State</Form.Label>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Control type="password" placeholder="password" />
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control type="password" placeholder="Re-enter password" />
                <Form.Label>Re-enter Password</Form.Label>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Control as="textarea" placeholder="Please describe your injustice here" />
                <Form.Label>Why we need a reform</Form.Label>
              </Col>
            </Form.Row>
          </Form.Group>
          <Link to='/InterActiveRoadMap'>
            <Button variant="primary" type="submit">
              Submit
           </Button>
          </Link>
        </Form>
      </StyledContainer>
      </>
      /*
      
            <StyledContainer style = {{padding: "20px"}}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="firstName" placeholder="first name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lastName" placeholder="last name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="state" placeholder="State" />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Political Injustice</Form.Label>
                  <Form.Control type="password" placeholder="Injustice" />
                </Form.Group>
      
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="phoneNumber" placeholder="Number" />
                </Form.Group>
                <Link to='/InterActiveRoadMap'>
                  <Align>
                  <StyledButton variant="primary" type="submit">
                    Submit
                   </StyledButton>
                   </Align>
                </Link>
      
              </Form>
            </StyledContainer>*/
    );
  }
}

export default SignUp;
