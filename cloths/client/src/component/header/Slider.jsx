import React from "react";
import "./Slider.css";
import { clotheseight } from "./../../asserts/img/Images";
import { clotheten } from "./../../asserts/img/Images";
// import { clotheseleven } from "./../../asserts/img/Images";
// import { clotheseight1 } from "./../../asserts/img/Images";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const buttonStyle = {
    backgroundColor: "black", // Set black color for the buttons
    color: "white", // Set white text color for better visibility
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={clotheseight} alt="" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./img/cloths9.jpg" alt="" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={clotheten} alt="" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <style>
        {`
          .carousel-control-prev-icon, .carousel-control-next-icon {
            background-color: black !important; // Override default background color
          }

          .carousel-control-prev, .carousel-control-next {
            color: white !important; // Set white color for the icon
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
