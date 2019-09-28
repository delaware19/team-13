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

export class SignIn extends Component {
    render() {
        return (

            <StyledContainer>
                <Form>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link to='/InterActiveRoadMap'>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Link>
                </Form>
                </StyledContainer>
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
