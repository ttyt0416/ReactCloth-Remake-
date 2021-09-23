import React from "react";
import "./directory.styles.scss";

import { RootStateOrAny, useSelector } from "react-redux";

import Menuitem from "../menu-item/menutiem.component";

const Directory: React.FC = () => {
  const sections: any = useSelector<RootStateOrAny>((state) => state.directory);
  const section = sections.sections;

  const makeDirectory = () => {
    let directoryArray: any = [];
    for (let i = 0; i < section.length; i++) {
      directoryArray.push(
        <Menuitem
          key={i}
          title={section[i].title}
          imageUrl={section[i].imageUrl}
          size={section[i].size}
          linkUrl={section[i].linkUrl}
        />
      );
    }
    return directoryArray;
  };

  return <div className="directory">{makeDirectory()}</div>;
};

export default Directory;
