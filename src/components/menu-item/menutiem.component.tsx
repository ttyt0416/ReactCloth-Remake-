import React from "react";
import "./menuitem.styles.scss";

import { useHistory } from "react-router";

interface menuInfo {
  title: any;
  imageUrl: any;
  size: any;
  linkUrl: any;
}

const Menuitem: React.FC<menuInfo> = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory();

  const moveToLink = () => {
    history.push(linkUrl);
  };

  return (
    <div className={`menuitem ${size}`} onClick={moveToLink}>
      <div
        className="menuitem__backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="menuitem__content">
        <h1 className="menuitem__title">{title.toUpperCase()}</h1>
        <span className="menuitem__subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default Menuitem;
