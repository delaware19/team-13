import React, { Component }  from "react";
import { TypeFormComponent } from "./components/TypeFormComponent";




// The overall page when you click on welcome page
// Top Wrapper takes the elements on the top of the page
// Listing Wrapper takes care of the dynamically given items
// and puts them in a grid that reponsively adjusts







export class HomePage extends Component{
    render() {
        return (
            <div>
                <TypeFormComponent></TypeFormComponent>
            </div>
        );
    }
}

export default HomePage;
