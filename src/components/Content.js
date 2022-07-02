import React from "react";
import "./Content.css";
import Searchbar from "./webbody/Searchbar";
import HomeCarousel from "./webbody/Carousel";
import Cards from "./webbody/Cards";
import Signacc from "./webbody/Signin-up";
function content() {
    return(
        <div>
            <Signacc/>
            <Searchbar />
            <Cards/>
            <HomeCarousel />
            table of 3 animation
            add more items 
            support us
          </div>
    );
}

export default content;