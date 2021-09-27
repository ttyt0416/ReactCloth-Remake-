import React from "react";
import "./collectionpage.styles.scss";

import { useHistory } from "react-router";
import { RootStateOrAny, useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collectionitem.component";

const Collectionpage: React.FC = () => {
  let history = useHistory();
  let extractHistory: string = history.location.pathname.replace("/shop/", "");
  const collectionInfos: any = useSelector<RootStateOrAny>(
    (state) => state.shop
  );
  const collectionInfo = collectionInfos.collections[extractHistory].items;

  const makeCollections = () => {
    let collectionArray: any = [];
    for (let i = 0; i < collectionInfo.length; i++) {
      collectionArray.push(
        <CollectionItem
          key={i}
          name={collectionInfo[i].name}
          price={collectionInfo[i].price}
          imageUrl={collectionInfo[i].imageUrl}
        />
      );
    }
    return collectionArray;
  };

  return (
    <div className="collectionpage">
      <div className="collectionpage__items">{makeCollections()}</div>
    </div>
  );
};

export default Collectionpage;
