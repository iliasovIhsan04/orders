import React from "react";
import "./portfolio.css";
import vector5 from "../iconc/Vector (5).svg";
import honda from "../iconc/Group 8490.svg";
import comment1 from "../../img/Comment1.svg";
import comment2 from "../../img/comment2.svg";
import comment3 from "../../img/comment3.svg";
import Slider from "react-slick";
const Portfolio = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };
  return (
    <div className="container">
      <div className="portfolio">
        <div className="port-text">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam{" "}
            <br /> ultrices in aliquet.{" "}
          </p>
        </div>
        <div className="port-block">
          <p>All countries</p>
          <p>Kyrgyzstan</p>
          <p>Kazakstan</p>
          <p>Poland</p>
          <p>Russia</p>
          <p>Russia</p>
          <p>Armenia</p>
          <p>Azerbaijan</p>
          <p>Bahrain</p>
          <p>Bangladesh</p>
          <p>Chile</p>
          <p>Canada</p>
          <p>Cyprus</p>
          <p>Cenmark</p>
          <p>Finland</p>
          <img src={vector5} />
        </div>
        <div className="honda-block">
          <img src={honda }/>
        <img src={honda }/>
        <img src={honda }/>
        <img src={honda }/>
        </div>
        <div className="restangle111"> </div>
        <div className="testimonials">
          <h4>Testimonials</h4>
          <h1>What say our clients</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam{" "}
            <br /> ultrices in aliquet.{" "}
          </p>
        </div>
        <div className="name">
              <img src={comment1} />
              <img src={comment2} />
              <img src={comment3} />
          </div>
          </div>
      </div>
  );
};

export default Portfolio;









