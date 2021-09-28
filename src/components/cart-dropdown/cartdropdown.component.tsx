import React from "react";
import "./cartdropdown.styles.scss";

import { RootStateOrAny, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartDropdown: React.FC = () => {
  let cartDropdownItemsArray: any = [];
  const cartItems: any = useSelector<RootStateOrAny>((state) => state.cart);
  const cartItem: any = cartItems.cartItems;

  const makeCartDropdown = () => {
    for (let i = 0; i < cartItem.length; i++) {
      cartDropdownItemsArray.push(
        <div className="cartDropdown__item" key={i}>
          <img
            alt=""
            className="cartDropdown__item-image"
            src={cartItem[i].imageUrl}
          />
          <div className="cartDropdown__item-container">
            <span className="cartDropdown__item-name">{cartItem[i].name}</span>
            <div className="cartDropdown__item-pricing"></div>
            <span className="cartDropdown__item-quantity">
              {cartItem[i].quantity}
            </span>
          </div>
          <span className="cartDropdown__item-price">{cartItem[i].price}</span>
        </div>
      );
    }
    return cartDropdownItemsArray;
  };

  return <div className="cartDropdown">{makeCartDropdown()}</div>;
};

export default CartDropdown;
