import React from "react";
import "./header.css";
import logo from "../../img/Frame.svg";
import logo1 from '../../img/telefon.svg'
import logo2 from '../../img/watsap.svg'
import logo3 from '../../img/facebook.svg'
import logo4 from '../../img/instagram.svg'
import logo5 from '../../img/telegram.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <img className="logo-img" src={logo} />
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Auction</a>
          <a href="#">Contacts</a>
          <div className="iconc">
         <img src={logo1}/>
         <img src={logo2}/>
         <img src={logo3}/>
         <img src={logo4}/>
         <img src={logo5}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
