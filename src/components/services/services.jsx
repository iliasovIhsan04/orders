import React from "react";
import "./services.css";
import servis from "../servicesData/servicesD";
import mers from "../iconc/s-w150 (2).svg";
import bmw from "../iconc/s-w150 (8).svg";
import gord from "../iconc/s-w150 (6).svg";
import wev from "../iconc/s-w150 (9).svg";
import lexus from "../iconc/Lexus-logo.svg";
import cms from "../iconc/GMC-logo.svg";
import cart from "../iconc/s-w150 (4).svg";
import subaru from "../iconc/subaru-emblem.svg";
import Chevrolet from "../iconc/Chevrolet-logo.svg";
import Slider from "react-slick";
// import restans from '../iconc/Rectangle 325315.svg'

const Services = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 9,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };
  return (
    <div className="container">
      <div className="ser-block">
        <p>Our</p>
        <h2>Services</h2>
        <span className="lorem">
          Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam{" "}
          <br />
          ultrices in aliquet.
        </span>
      </div>
      <div className="big">
        {servis.map((el) => (
          <div className="image11">
            <div className="image1">
              <img src={el.iconc} />
              <h1>{el.text}</h1>
              <p>{el.table}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="marka">
        <Slider {...settings}>
          <div>
            <div>
              <img src={mers} />
            </div>
          </div>
          <div>
            <div>
              <img src={bmw} />
            </div>
          </div>
          <div>
            <div>
              <img src={gord} />
            </div>
          </div>
          <div>
            <div>
              <img src={wev} />
            </div>
          </div>
          <div>
            <div>
              <img src={lexus} />
            </div>
          </div>
          <div>
            <div>
              <img src={cms} />
            </div>
          </div>
          <div>
            <div>
              <img src={cart} />
            </div>
          </div>
          <div>
            <div>
              <img src={subaru} />
            </div>
          </div>
          <div>
            <div>
              <img src={Chevrolet} />
            </div>
          </div>
          <div>
            <div>
              <img src={mers} />
            </div>
          </div>
          <div>
            <div>
              <img src={bmw} />
            </div>
          </div>
          <div>
            <div>
              <img src={gord} />
            </div>
          </div>
          <div>
            <div>
              <img src={wev} />
            </div>
          </div>
          <div>
            <div>
              <img src={lexus} />
            </div>
          </div>
          <div>
            <div>
              <img src={cms} />
            </div>
          </div>
          <div>
            <div>
              <img src={cart} />
            </div>
          </div>
          <div>
            <div>
              <img src={subaru} />
            </div>
          </div>
          <div>
            <div>
              <img src={Chevrolet} />
            </div>
          </div>
        </Slider>
      </div>
      <div className="restans">
      
      </div>
    </div>
  );
};
export default Services;







    



