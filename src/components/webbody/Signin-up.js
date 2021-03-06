import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Baymax from "../../assets/image/Baymax.png";


const NavsecStyles =styled.div`
.Sign{
    background-color: #b50f24;
  flex-direction:row;
  display:flex;
  margin-top: -2rem;
}
h3{
    padding-top: 2rem;
}
.left-side{ 
    font-weight: bolder;
    font-size: large;
    color:#fff;
    flex-direction:column;  
    width:50%;
    align-self: center;
    text-align: center;
  margin-bottom: 2rem;
}
.right-side{
    flex-direction:column;
    width:50%;
}
img{
    object-fit:fill;
}
.btn{
    padding-top: 4rem;
    display:flex;
    gap: 5rem;
    text-align: center;
    justify-content:center;
    position:relative;
    vertical-align: middle;
}
.btnin{
    background-color:yellow;
    padding: 18px 60px;
    border: 1px solid; 
    border-color: #cbcb05 ;
    color:#000;
    display:inline-block;
    font-weight:700;
    text-decoration:none;
    border-radius: 16px;
    transition: 0.4s;
    cursor: pointer;
}
.btnup{
    background-color: #b50f24;
    padding: 18px 60px;
    border: 2px solid;
    border-color: #fff;
    color:#fff;
    display:inline-block;
    font-weight:700;
    text-decoration:none;
    border-radius: 16px;
    transition: 0.4s;
    cursor: pointer;
}
.btnin:hover{
    background-color: #cbcb05;
    border-color: #cbcb05;
}
.btnup:hover {
   background-color: #fff;
   color:#000;
}
h1{
   font-weight: bolder;
}
@media screen and (max-width:1024px) {
    .Sign{
        margin-top: -1rem;
    }
}
@media screen and (max-width:768px) {
    .btn{
        gap:3rem;
    }
    .btnin{
        padding: 18px 30px;
    }
    .btnup{
        padding: 18px 30px;
    }
}
@media screen and (max-width:600px) {
    .btn{
        gap:1.8rem;
    }
    .btnin{
        padding: 18px 20px;
    }
    .btnup{
        padding: 18px 20px;
    }
}
`

export default function Signacc() {
    return( 
    <NavsecStyles ClassName="navsign">
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
    </NavsecStyles>
    );
}

