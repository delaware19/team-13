import React, { Component }  from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import Orange from "../HomePage/assets/HomePage.svg";
import roadmap from "../HomePage/assets/roadmap.png";

import { Link } from 'react-router-dom';

import Line from "../HomePage/assets/Line.svg";

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

const Back = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: #E47D5C;
padding-bottom: 1000px;
padding-top: 120px;
`;

const TextWrapper = styled.div`
color: white;
padding: 20px;
font-size: 60px;
font-weight: 500;
width: 100%;

display: flex;
justify-content: center;


`;

const Header = styled.div`
color: white;
font-size: 30px;
width: 640px;
`;

const Mapicon = styled.img`
width: 200px;
padding: 30px;
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 30px;
`;

const StyledButton = styled(Button)`
width: 264px;
height: 84px;
margin-right: 20px;
margin-bottom: 20px;
background-color: white; 
color: black;
border-radius: 15px;
border-color: white;
font-size: 20px;
`;

const LineWrap = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
color: white;
font-size: 26px;
justify-content: center;

`;

export class HomePage extends Component{
    render() {
        return (
            <div src={Orange}>


            <Back>
            <TextWrapper>
                We the People
            </TextWrapper>
            <Header>
            Our organization can help you find your voice and make a change! Choose one that fits your task:
            </Header>
            <ButtonWrapper>
            <Link to='/signup'>

                <StyledButton bright="light">I'm Ready to Make A Change!</StyledButton>
            </Link>
            <Link to='/signin'>
                <StyledButton bright="light">I'm Already Making A Change!</StyledButton>
            </Link>
            </ButtonWrapper>


            <LineWrap>
                Or
            </LineWrap>
                

            <ButtonWrapper>
            <Link to='/roadMap'>
                <StyledButton bright="light">Quick Overview</StyledButton>
                </Link>    
            </ButtonWrapper>
            
            </Back>

        </ div>
        );
    }
}

export default HomePage;
