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


export class FinishedStage1 extends Component{
    render() {
        return (
            <div>
                <h1>Congratulations You finished Phase one of the Hopenomics System</h1>
                <h2>A Rise team member will be in contact with you to discuss the next stage
                    <br></br> of the process.<br></br>We would like to commend you for taking the first steps twords
                    <br></br>making a real change in your community.
                </h2>
                <h2>
                    The next step will be to schedule a call with one of our staff members
                </h2>

                <h1>Remember that We The People Are Ready to Make a Change</h1>
            </div>
        );
    }
}

export default FinishedStage1;