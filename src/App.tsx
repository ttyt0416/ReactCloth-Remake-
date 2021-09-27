import React from "react";
import "./App.css";

import { Switch, Route } from "react-router";

import Homepage from "./pages/homepage/homepage.component";
import Authpage from "./pages/authpage/authpage.component";
import Collectionpage from "./pages/collectionpage/collectionpage.component";

import Header from "./components/header/header.component";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/auth" component={Authpage} />
        <Route path="/shop/:id" component={Collectionpage} />
      </Switch>
    </div>
  );
};

export default App;
