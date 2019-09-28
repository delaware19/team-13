import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

/*
const FormWrapper = styled.div`
    
`;
*/
const TotalWrapper = styled.div`
background-color: #E47D5C;
`;

const StyledContainer = styled(Container)`
background-color: #E47D5C;
padding: 20px;
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

export class SignIn extends Component {
    render() {
        return (
            <>
                <h1 style={{ backgroundColor: "#E47D5C", textAlign: "center", marginBottom: "0px"}}>Continue Your Journey</h1>
                <StyledContainer>
                    <Form>
                        <Form.Group style = {{paddingLeft: "400px", paddingRight: "400px"}} controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text>
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group style = {{paddingLeft: "400px", paddingRight: "400px"}} controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Align>
                            <Link to='/InterActiveRoadMap'>
                                <StyledButton variant="primary" type="submit">
                                    Login
                        </StyledButton>
                            </Link>
                        </Align>
                    </Form>
                </StyledContainer>
            </>
            /*
            <Form>
                <FormWrapper id = "form_wrapper">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms" />
                    </Form.Group>

                    <Link to='/InterActiveRoadMap'>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                    </Link>
                </FormWrapper>
            </Form>*/
        );
    }
}

export default SignIn;
