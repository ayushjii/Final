import React from "react";

import Searchbar from "./webbody/Searchbar";
import HomeCarousel from "./webbody/Carousel";
import Cards from "./webbody/Cards";
import Signacc from "./webbody/Signin-up";
import CounterHome from "./webbody/Counter";
import Moreitems from "./webbody/AddMore";
import Support from "./webbody/Support";

function content() {
    return(
        <div>
            <Signacc/>
            <Searchbar />
            <Cards/>
            <HomeCarousel />
            <CounterHome />
            <Moreitems />
            <Support />
          </div>
    );
}

export default content;