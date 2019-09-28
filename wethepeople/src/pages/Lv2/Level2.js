import React, { Component }  from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import reseach1 from "../InterActiveRoadMap/assets/research_l2.png";

import { Link } from 'react-router-dom';

// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts


export class Level2 extends Component{
    render() {
        return (
            <div>
                <img src = {reseach1}></img>
                <p>Discover Your Voice And Find Your Passion</p>
                <p>
                    Congrats! Just By Starting here, you are on the path for success!
                </p>
                <Link to='/InterActiveRoadMap3'>
                    <Button bright="light">Next Level!</Button>
                </Link>
            </div>
        );
    }
}

export default Level2;