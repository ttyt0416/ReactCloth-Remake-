import React, { useState } from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import CartDropdown from "../cart-dropdown/cartdropdown.component";

const Header: React.FC = () => {
  const [cart, setCart] = useState<boolean>(false);
  const cartItems: any = useSelector<RootStateOrAny>((state) => state.cart);
  const cartItem: any = cartItems.cartItems;

  const toggleCart = () => {
    setCart(!cart);
  };

  return (
    <>
      <div className="header">
        <Link className="header__logoContainer" to="/">
          <Logo className="header__logo" />
        </Link>
        <div className="header__options">
          <div className="header__cartContainer" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="header__itemLength">{cartItem.length}</span>
          </div>
          <Link className="header__options-option" to="/contact">
            CONTACT
          </Link>
          <Link className="header__options-option" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      {cart ? (
        <div className="header__cartDropdown">
          <CartDropdown />
        </div>
      ) : null}
    </>
  );
};

export default Header;
