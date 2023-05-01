import React from "react";
import "./Burger.css";
interface Props {
  saladBurger?: string;
  cheeseBurger?: string;
  meatBurger?: string;
  allPrice?: number;
}

const Burger: React.FC<Props> = (props) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>

      <div className={props.saladBurger}></div>
      <div className={props.cheeseBurger}></div>
      <div className={props.meatBurger}></div>
      <div className="BreadBottom"></div>
      <div>{props.allPrice}</div>
    </div>
  );
};

export default Burger;
