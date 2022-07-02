import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const SlidersStyles=styled.div`
 padding: 50px 25px;
 h2,h3{
  color:black;
 }
 `

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      speed: -200,
      centerPadding: "px",
      slidesToShow: 8,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 767,
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
        <Slider {...settings} className="out">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
          <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
          <div>
            <h3>17</h3>
          </div>
          <div>
            <h3>18</h3>
          </div>
          <div>
            <h3>19</h3>
          </div>
          <div>
            <h3>20</h3>
          </div>
          <div>
            <h3>21</h3>
          </div>
          <div>
            <h3>22</h3>
          </div>
          <div>
            <h3>23</h3>
          </div>
          <div>
            <h3>24</h3>
          </div>
          <div>
            <h3>25</h3>
          </div>
          <div>
            <h3>26</h3>
          </div>
          <div>
            <h3>27</h3>
          </div>
        </Slider>
      </SlidersStyles>
    );
  }
}