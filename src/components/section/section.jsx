import { React } from "react";
import "./section.css";
import ipsum from "../../img/ipsum.svg";
import iconc1 from '../../img/Frame 7821.svg'
import iconc2 from '../../img/Frame 8380.svg'
import iconc3 from '../../img/Frame 8381.svg'
import alex from "../data/data";
const Section = () => {
  return (
    <div className="section">
      <div className="s-block">
        <p className="s-text">Process</p>
        <p className="steps">
          <span className=""> Steps to buy a car from</span> <br /> Canada
        </p>
        <div className="ipsum">
          <img className="flag" src={ipsum} />
            <div>
              {alex.map((el) => (
                <div className="block">
                  <img  src={el.img}  />
                  <p>{el.text}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className="box">
        <div className="iconc-img">
          <img src={iconc1}/>
          <img src={iconc2}/>
          <img src={iconc3}/>
        </div>
        </div>
    </div>
  );
};

export default Section;
