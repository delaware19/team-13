import React, { Component }  from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import roadmap from "../HomePage/assets/roadmap.png";

import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

const Back = styled.div`
background-color: #E47D5C;
`;

const TextWrapper = styled.div`
font-family: Poppins;
color: white;
font-size: 60px;
`;

const Header = styled.div`
font-family: Poppins;
color: white;
font-size: 30px;
width: 500px;
`;

const Mapicon = styled.img`
width: 200px;
padding: 30px;
`;

const But = styled(Button)`
width: 100px;
height: 100px;
background-color: white;
color: black;
margin-left: 30px;
padding-bottom: 50px;
border-radius: 30%;
`;
export class HomePage extends Component{
    render() {
        return (

            <Back>
            <TextWrapper>
                We the People
            </TextWrapper>
            <Header>
            Our organization can help you find your voice and make a change! Choose one that fits your task:
            </Header>
            <div>
            <Link to='/signup'>
                <Button bright="light">Are Ready to Make A Change</Button>
            </Link>
            <Link to='/signin'>
                <Button bright="light">Are Already Making A Change</Button>
            </Link>
            <Link to='/roadMap'>
                <Button bright="light">Quick Overview</Button>
            </Link>
            </div>

            </Back>

        );
    }
}

export default HomePage;
