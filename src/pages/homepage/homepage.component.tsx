import React from "react";
import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
