import React from "react";
import "./collectionitem.styles.scss";

interface Collections {
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem: React.FC<Collections> = ({ name, price, imageUrl }) => {
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
    </div>
  );
};

export default CollectionItem;
