import React from "react";
import "./cartdropdown.styles.scss";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { addItem, removeItem } from "../../redux/cart/cart.actions";

const CartDropdown: React.FC = () => {
  let cartDropdownItemsArray: any = [];
  const dispatch = useDispatch();
  const cartItems: any = useSelector<RootStateOrAny>((state) => state.cart);
  const cartItem: any = cartItems.cartItems;

  const increaseItem = (item: any) => {
    dispatch(addItem(item));
  };

  const decreaseItem = (item: any) => {
    dispatch(removeItem(item));
  };

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
            <div className="cartDropdown__item-pricing">
              <div
                className="cartDropdown__item-minus"
                onClick={() => decreaseItem(cartItem[i])}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <span className="cartDropdown__item-quantity">
                {cartItem[i].quantity}
              </span>
              <div
                className="cartDropdown__item-plus"
                onClick={() => increaseItem(cartItem[i])}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <span className="cartDropdown__item-price">
                {cartItem[i].price}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return cartDropdownItemsArray;
  };

  return (
    <div className="cartDropdown">
      {cartItem.length !== 0 ? (
        makeCartDropdown()
      ) : (
        <div className="cartDropdown__empty">EMPTY</div>
      )}
    </div>
  );
};

export default CartDropdown;
