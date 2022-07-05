import React from "react";
import "./Content.css";
import Searchbar from "./webbody/Searchbar";
import HomeCarousel from "./webbody/Carousel";
import Cards from "./webbody/Cards";
import Signacc from "./webbody/Signin-up";
import CounterHome from "./webbody/Counter";

function content() {
    return(
        <div>
            <Signacc/>
            <Searchbar />
            <Cards/>
            <HomeCarousel />
            <CounterHome />
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