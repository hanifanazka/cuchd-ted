import React, { Component } from "react";
import Slider from "react-slick";
import FCard from "./FCard";

export default class Teams extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="teams">
        <h2> Teams </h2>
        <Slider {...settings}>
          <FCard name="Yuvraj Singh Rajput" role="Organizer" />
          <FCard name="Gopi Gautam" role="Co-organizer" />
		  <FCard name="Abhay Tomar" role="Executive Producer" />
		  <FCard name="Vansh Dhiman" role="Website Manager" />
          <FCard name="Himanshu Sharma" role="Event Manager" />
          <FCard name="Bhavya Sehgal" role="Social Media Manager" />
          <FCard name="Suryaveer Yadav" role="Video and production" />
          
          <FCard name="TBD" role="TBD" />

        </Slider>
      </div>
    );
  }
}