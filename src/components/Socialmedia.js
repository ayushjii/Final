import React from "react";
import SectionTitle from "./SectionTitle";
import SocialIcon from "./SocialMediaicons";
import {GrInstagram, GrYoutube} from 'react-icons/gr';
import {RiFacebookLine, RiLinkedinLine} from 'react-icons/ri';
import {TbBrandTwitter} from 'react-icons/tb'
import {SiDiscord} from 'react-icons/si'
import styled from "styled-components";

const SocialStyle = styled.div`
padding-top:10rem;
*{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold';
    color: var(--gray-1);
  }

.icons{
  padding-top:8rem;
  padding-bottom:5rem;
  display:flex;
  justify-content:center;
  column-gap:45px;
  width: 100%;
  flex-direction:row;
}

.s-icon{
width:60px;
height: 60px;
display: inline-flex;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 26px;
color: #fff;
border-radius: 50%;
outline: 2px solid #fff;
transition-property: outline-offset, outline-color, background-color;
transition-duration: .75s ;
}

.icon--youtube,
.icon--twitter,
.icon--instagram,
.icon--linkedin,
.icon--discord,
.icon--facebook{
  background-color:var(--black);
}

.s-icon:hover{
    outline-offset: 4px;
}

.s-icon:hover,
 .icon{
 animation: shake .50s;
}

.icon--youtube:hover {
    background-color: #c4302b;
    outline-color: #c4302b;
}

.icon--discord:hover {
    background-color: #7289d9;
    outline-color: #7289d9;
}

.icon--twitter:hover {
    background-color: #1fa1f2;
    outline-color: #1fa1f2;
}

.icon--facebook:hover {
    background-color: #0077b5;
    outline-color: #0077b5;
}

.icon--linkedin:hover {
    background-color: #90ee90;
    outline-color: #90ee90;
}

.icon--instagram:hover {
    background-image: radial-gradient(circle at 30% 107%,
            #fdf497 0%, #fdf497 5%,
            #fd5949 45%, #d6249f 60%,
            #285AEB 90%);
    outline-color: #a02d76;
}
@keyframes shake {
  10%{transform: rotate(15deg);}
  20%{transform: rotate(-15deg);}
  30%{transform: rotate(15deg);}
  40%{transform: rotate(-15deg);}
}

@media only screen and (max-width: 768px){
  .icons{
    flex-direction: row ;
      gap: 3rem;
      & > div {
        margin-top: 5rem;
      }
  }
} 
`;

export default function Socialmedia(){
    return(
      <SocialStyle>
         <SectionTitle 
            heading="Our Social Media Handles"
            subheading=" " />
          <div className="icons">
            <div className="s-icon icon--instagram">
             <SocialIcon 
               links={[
               {
                icon:<GrInstagram />,
                path: 'http://instagram.com',
               },
             ]}/>
           </div>
            <div className="s-icon icon--facebook">
             <SocialIcon  
               links={[
               {
                icon:<RiFacebookLine />,
                path: 'http://facebook.com',
               },
             ]}/>
           </div>
            <div className="s-icon icon--linkedin">
             <SocialIcon 
               links={[
               {
                icon:<RiLinkedinLine />,
                path: 'http://linkedin.com',
               },
              ]}/>
           </div>
            <div className="s-icon icon--twitter">
             <SocialIcon
               links={[
               {
                icon:<TbBrandTwitter />,
                path: 'http://twitter.com',
               },
              ]}/>
           </div>
           <div className="s-icon icon--youtube">
             <SocialIcon
               links={[
               {
                icon:<GrYoutube />,
                path: 'http://youtube.com',
               },
              ]}/>
           </div>
           <div className="s-icon icon--discord">
             <SocialIcon
               links={[
               {
                icon:<SiDiscord />,
                path: 'http://discord.com',
               },
              ]}/>
           </div>
         </div>
      </SocialStyle>
    );
}
