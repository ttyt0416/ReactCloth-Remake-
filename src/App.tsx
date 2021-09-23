import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";

import Homepage from "./pages/homepage/homepage.component";

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
