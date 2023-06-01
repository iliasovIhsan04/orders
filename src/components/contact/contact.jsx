import React from "react";
import "./contact.css";
import email from "../iconc/Frame 7807.svg";
import phone1 from "../iconc/Frame 8361.svg";
import hours from "../iconc/Frame 8364.svg";
import main1 from "../iconc/Frame 8367 (2).svg";
import co from "../iconc/CO.svg";
import flovers from '../iconc/Vector 103 (1).svg'

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-block">
        <div className="contact-text">
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam{" "}
            <br /> ultrices in aliquet.{" "}
          </p>
        </div>
        <div className="phone-block">
          <div className="column">
            <img src={email} alt="" />
            <a className="tel" href="mailto: autokanada@gmail.com">
              autokanada@gmail.com
            </a>
            <img src={hours} alt="" />
            <h6>
              Monday-Friday <br /> 8:00AM-7:00PM{" "}
            </h6>
          </div>
          <div className="column">
            <img src={phone1} alt="" />
            <a className="tel" href="tel:+1 431 688 84 84">
              +1 431 688 84 84
            </a>
            <img src={main1} alt="" />
            <h6>
              3525 North Harlem Avenue <br /> Canada, IL, 6034{" "}
            </h6>
          </div>
          <div className="map-block">
            <iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.
       795658279316!2d72.8232148458904!3d19.1416496712013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
       .1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2z0JTQttC-0LTQttC10YjQstCw0YDQuCDQl9Cw0L_QsNC0LCDQnNGD0L
       zQsdCw0LgsINCc0LDRhdCw0YDQsNGI0YLRgNCwIDQwMDA0Nywg0JjQvdC00LjRjw!5e0!3m2!1sru!2skg!
       4v1679166537352!5m2!1sru!2skg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="block33">
        <img className="flovers" src={flovers}  />
          <div className="block3344">
            <img src={co} />
          </div>
          <div className="amet">
              <h1>
                Lorem ipsum dolor sit amet consectetur. Nec <br /> aliquam
                ultrices in aliquet.{" "}
              </h1>
              <form action="" className="form">
                <label>Your phone</label>
                <input type="number" placeholder="+996 700 123 345"/>
                <label> Your E-mail </label>
                <input type="email" placeholder="victorsoi@gmail.com"/>
              </form>
              <button className="send"><span className="span">send</span></button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;

