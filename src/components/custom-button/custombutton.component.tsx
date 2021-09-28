import React from "react";
import "./custombutton.styles.scss";

interface ButtonState {
  inverted: boolean;
  children: any;
}

const CustomButton: React.FC<ButtonState> = ({ inverted, children }) => {
  return (
    <button className={`${inverted ? "inverted" : ""} customButton`}>
      {children}
    </button>
  );
};

export default CustomButton;
