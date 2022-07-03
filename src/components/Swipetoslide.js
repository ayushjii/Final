import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import {HiArrowNarrowRight} from 'react-icons/hi';
import styled from "styled-components";
import CardStyles from "./Slidermain";

const SlidersStyles=styled.div`
 margin: 40px 0;
 h2,h3{
  color: #000;
 }
 .Slider_heading{
  margin-left:50px;
  color:#000; 
  font-weight: 600;
  font-size:30px;
  text-transform:none;
 }
 .headicon{
  color:#000;
  width:34px;
  height:34px;
  weight: 100;
  float:right;
  margin-right:50px;
 }
 .Slider_heading:hover{
  color: #0000ff;
 }
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.slick-prev {
    color: #fff;
    width: 40px;
    height: 82%;
    left: 0;
    z-index:2;
    position: absolute;
    background-color:#000;
    opacity:1;
    cursor: pointer;
    background: linear-gradient(to left,
          rgba(255, 0, 0, 0) 0%, #464646 100%);
}
.slick-next {
    color: #fff;
    width: 50px;
    height: 82%;
    right: 0;
    z-index:2;
    position: absolute;
    cursor:pointer;
    opacity:1;
    background: linear-gradient(to right,
          rgba(255, 0, 0, 0) 0%, #464646 100%);
} 
`
 const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIos  />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos />
    </div>
  );
};


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      speed: -200,
      centerPadding: "20px",
      slidesToShow: 8,
      swipeToSlide: true,
      nextArrow: <NextBtn/>,
      prevArrow: <PreviousBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    };
    return (
        <SlidersStyles>
        <a href="/" className="Slider_heading">
          All Blogs Are Here
          <HiArrowNarrowRight className="headicon"/>
        </a>
        <Slider {...settings} className="slicker" >
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />  
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />         
        </Slider>
        </SlidersStyles>
       );
  }
}