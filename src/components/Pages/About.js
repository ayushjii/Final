import React from "react";
import styled from "styled-components";
import Aboutdev from "../Aboutmain";
import SectionTitle from "../SectionTitle";

const AboutSection =styled.div`
padding: 10rem 0;
margin: 0 5rem;
`

export const About = () => {
  return (
    <AboutSection>
    
       <SectionTitle
        heading="Developer"
        subheading="About" 
        />
      <Aboutdev
        devname="Ayush Goyal"
        devmess="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      />
      <Aboutdev
        devname="Jash Goyal"
        devmess="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      />
    </AboutSection>
  );
};
