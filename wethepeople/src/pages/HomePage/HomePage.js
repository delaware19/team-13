import React, { Component }  from "react";
import {Form, Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import roadmap from "../HomePage/assets/roadmap.png";
// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts

const Back = styled.div`
background-color: #E47D5C;
`;

const Mapicon = styled.img`
width: 50p%;
`;


export class HomePage extends Component{
    render() {
        return (

            <Back>
                <Mapicon src={roadmap}></Mapicon>
                
            </Back>

        );
    }
}

export default HomePage;
