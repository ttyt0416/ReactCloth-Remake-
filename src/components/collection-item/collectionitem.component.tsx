import React, { useState } from "react";
import "./collectionitem.styles.scss";

import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

import CustomButton from "../custom-button/custombutton.component";

interface Collections {
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem: React.FC<Collections> = (item) => {
  let { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="collectionItem">
      <div
        className="collectionItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collectionItem__footer">
        <span className="collectionItem__name">{name}</span>
        <span className="collectionItem__price">{price}</span>
      </div>
      <CustomButton inverted={true}>
        <div className="collectionItem__add" onClick={onButtonClick}>
          ADD TO CART
        </div>
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
