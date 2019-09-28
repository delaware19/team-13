import React, { Component }  from "react";
import { TypeFormComponent } from "./components/TypeFormComponent";
import styled from "styled-components";

import roadmap from "../HomePage/assets/roadmap.png";


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
            <div>
                <Mapicon src={roadmap}></Mapicon>
                <TypeFormComponent>
                
                </TypeFormComponent>
            </div>
        );
    }
}

export default HomePage;
