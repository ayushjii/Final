import React from "react";
import styled from "styled-components";
import Defaultuser from "../../src/assets/image/Defaultuser.png";
import {RiInstagramLine, RiLinkedinLine, RiTwitterLine} from 'react-icons/ri'

const DevStyles = styled.div`
html{
    font:62.5%;
}
.about_container{
    margin-top:5rem;
    width:100%;
    height:100%;
    background-color: #f5bb8c;
    color: #2e2a2e;
    padding:1.5rem;
    border-radius: .4rem;
}
.dev_img{
    width:;
    height:;
    object-fit: cover;
    border-radius: .4rem;
}
.dev_name{
    font-size: 4rem;
}
.dev_message{
    font-size: 1.4rem;
}
.dev_social{
    margin:0 5rem;
    padding-top:1rem;
    padding-bottom:2rem;
    display:flex;
    justify-content:center;
    column-gap:45px;
    flex-direction:row;
}
.socialhead{
    margin: 10rem 5rem 0 5rem;
    color: #fff;
    font-size:3rem;
    text-align: center;
}
.dev_icon{
    text-decoration:none;
    width:50px;
    height:50px;
    background-color: #cb611a;
    color:#fff;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content: center; 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 5px 5px 10px #f5bb8c,
               -5px -5px 10px #f5bb8c
}
.dev_icon:focus{
    animation: shadow .15s;
    ease-in-out;
}

@keyframes shadow{
    0% {
        box-shadow: inset 5px 5px 10px #f5bb8c,
                    inset 5px -5px 10px #f5bb8c;
    }
    100%{
        box-shadow: none;
    }
}

@media screen and (min-width:600px) {
    .about_container{
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 1.5rem;
    }
    .dev_img{
        width: 100%;
    }
    .dev_message{
        font-size:1.6rem;
    }
}
`

export default function Aboutdev({
    picture={Defaultuser},
    devname="NAME",
    devmess="Some message from the developer to others",
    devin="/",
    devinsta="/",
    devtwitter="/"
}) {
    return(
    <DevStyles>
        <div className="about_container">
          <img src={Defaultuser} alt="" className="dev_img" />
           <div className="dev_info">
            <h2 className="dev_name">{devname}</h2>
            <p className="dev_message">{devmess}</p>    
            <h4 className="socialhead"> Developer Socials </h4>
            <div className="dev_social">
              <a href={devinsta} className="dev_icon"><RiInstagramLine /></a>
              <a href={devin} className="dev_icon"><RiLinkedinLine /></a>
              <a href={devtwitter} className="dev_icon"><RiTwitterLine /></a>
              </div>
           </div>       
        </div>
    </DevStyles>
    );
}