import React from "react";
import "./footer.css";
import logo17 from "../../img/Frame.svg";
import wat from "../../img/watsap.svg";
import tel from "../../img/telegram.svg";
import instagram from "../../img/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-nav">
            <img className="logo-one" src={logo17} />
            <p className="sit">
              Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec <br />
              aliquam ultrices in aliquet. Nunc odio in a integer senectus{" "}
              <br />
              integer massa euismod iaculis.{" "}
            </p>
          </div>
          <div>
          <h3 className="links">Useful Links</h3>
            <div className="flex-one">
              <div className="flex">
                <a className="nome" href="">Home</a>
                <a className="nome" href="">About company</a>
              </div>
              <div className="flex">
                <a className="flex-end" href="">Services</a>
                <a className="flex-end" href="">Contacts</a>
              </div>
            </div>
            <div className="icon04">
              <img src={wat} alt="" />
              <img src={tel} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="flex">
            <h3 className="links">Subscribe</h3>
            <input type="text" placeholder="Name"   className='inputs'/>
            <input type="text" placeholder="Phone" className="inputs" />
            <button className="button12">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
