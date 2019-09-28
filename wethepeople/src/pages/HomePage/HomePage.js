import React, { Component }  from "react";
import {Form, Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

const Mapicon = styled.img`
width: 50p%;
`;


export class HomePage extends Component{
    render() {
        return (
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
    
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
    
    
            <Button variant="primary" type="submit">
              Submit
              </Button>
          </Form>
        );
    }
}

export default HomePage;
