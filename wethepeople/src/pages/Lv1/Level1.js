import React, { Component }  from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach1 from "../InterActiveRoadMap/assets/research_l1.png";

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
padding-top: 30px;
`;


export class Level1 extends Component{
    render() {
        return (
            <div style = {{width: "100%", height:"100%", textAlign: "center", backgroundColor: "#E47D5C", paddingBottom: "1000px",}}>
                <img src = {reseach1} style = {{width:"10%", height:"10%", paddingTop: "100px", borderRadius: "50px",}}></img>
                <Header>Discover Your Voice And Find Your Passion</Header>
                <Header>
                    Congrats! Just By Starting here, you are on the path for success!
                </Header>
                <Align>
                <Link to='/InterActiveRoadMap2'>
                    <StyledButton bright="light">Next Level!</StyledButton>
                </Link>
                </Align>
            </div>
        );
    }
}

export default Level1;