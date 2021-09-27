import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link className="header__logoContainer" to="/">
        <Logo className="header__logo" />
      </Link>
      <div className="header__options">
        <Link className="header__options-option" to="/contact">
          CONTACT
        </Link>
        <Link className="header__options-option" to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
