import React from "react";
import "./Content.css";
import Searchbar from "./webbody/Searchbar";
import Carousel from "./webbody/Carousel";
import Cards from "./webbody/Cards";

function content() {
    return(
        <div>
        <div>
            <Searchbar />
        </div>
        <div>
            <Cards/>
        </div>

        <div>
            <Carousel/>
        </div>
        <div>
            table of 3 animation
        </div>
        <div>
            add more items 
        </div>
        <div>
            support us
        </div>

        </div>
    );
}

export default content;