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


export class Level1 extends Component{
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

export default Level1;