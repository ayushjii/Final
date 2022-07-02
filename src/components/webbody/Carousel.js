import React, { Component } from "react";
import Slider from "react-slick";
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';
import './carousel.css';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RiArrowLeftSLine  />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RiArrowRightSLine />
    </div>
  );
};
export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextBtn/>,
      prevArrow: <PreviousBtn />
    };
    return (
      <div  className="carousel">
        <Slider {...settings}>
          <div>
          <img

      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="Third slide"
    />
          </div>
          <div>
          <img

      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="Third slide"
    />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
          <img

      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="Third slide"
    />
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}