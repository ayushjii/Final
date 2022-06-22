import React from "react";
import { Link } from "react-router-dom";
import Baymax from "../../assets/image/Baymax.png";
import "./Signin-up.css";

export default function Signacc() {
    return( 
    <div ClassName="navsign">
        <div className="Sign"> 
          <div className="left-side">
          <h1>
            <b>Start Building Your Stunning Blogs</b>
          </h1>
          <h3>To Help Others </h3>
         <div className="btn">
          <Link className="btnin" to={`/Signin`}> Signin </Link>
          <Link className="btnup" to={`/Signup`}> Signup </Link>
         </div>
          </div>
           <div className="right-side">
           <img src={Baymax} alt="Our Warrior" />
           </div>
          </div>
    </div>
    );
}

