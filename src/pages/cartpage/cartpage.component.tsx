import React from "react";
import "./cartpage.styles.scss";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { addItem, removeItem } from "../../redux/cart/cart.actions";

import StripeButton from "../../components/stripe-button/stripebutton.component";

const Cartpage: React.FC = () => {
  let CartpageItemsArray: any = [];
  let CartpageItemsTotalPrice: number = 0;
  const dispatch = useDispatch();
  const cartpageItems: any = useSelector<RootStateOrAny>((state) => state.cart);
  const cartpageItem: any = cartpageItems.cartItems;

  const increaseItem = (item: any) => {
    dispatch(addItem(item));
  };

  const decreaseItem = (item: any) => {
    dispatch(removeItem(item));
  };

  const makeCartpage = () => {
    for (let i = 0; i < cartpageItem.length; i++) {
      CartpageItemsArray.push(
        <div className="cartpage__item" key={i}>
          <img
            alt=""
            className="cartpage__item-image"
            src={cartpageItem[i].imageUrl}
          />
          <div className="cartpage__item-container">
            <span className="cartpage__item-name">{cartpageItem[i].name}</span>
            <div className="cartpage__item-pricing">
              <div
                className="cartpage__item-minus"
                onClick={() => decreaseItem(cartpageItem[i])}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <span className="cartpage__item-quantity">
                {cartpageItem[i].quantity}
              </span>
              <div
                className="cartpage__item-plus"
                onClick={() => increaseItem(cartpageItem[i])}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <span className="cartpage__item-price">
                {cartpageItem[i].price}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return CartpageItemsArray;
  };

  const getCartTotalPrice = () => {
    for (let i = 0; i < cartpageItem.length; i++) {
      CartpageItemsTotalPrice +=
        cartpageItem[i].price * cartpageItem[i].quantity;
    }
    return CartpageItemsTotalPrice;
  };

  return (
    <div className="cartpage">
      <h1 className="cartpage__title">Cart</h1>
      {cartpageItem.length !== 0 ? (
        <>
          {" "}
          <div className="cartpage__container">{makeCartpage()}</div>
          <StripeButton price={getCartTotalPrice()} />{" "}
        </>
      ) : (
        <div className="cartpage__container-empty">Cart is Empty</div>
      )}
    </div>
  );
};

export default Cartpage;
