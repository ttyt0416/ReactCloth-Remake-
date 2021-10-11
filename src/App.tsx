import React, { useState, useEffect } from "react";
import "./App.css";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { authService } from "./firebase/firebase";
import { Switch, Route, Redirect } from "react-router";

import Homepage from "./pages/homepage/homepage.component";
import Authpage from "./pages/authpage/authpage.component";
import Collectionpage from "./pages/collectionpage/collectionpage.component";
import Cartpage from "./pages/cartpage/cartpage.component";

import Header from "./components/header/header.component";

Amplify.configure(awsconfig);
const App: React.FC = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<null | {
    displayName: string | null;
    uid: string | null;
  }>(null);
  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="app">
      <Header isLoggedIn={Boolean(userObj)} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {userObj === null ? (
          <Route exact path="/auth" component={Authpage} />
        ) : (
          <Route exact path="/auth">
            <Redirect to="/" />
          </Route>
        )}
        <Route exact path="/cart" component={Cartpage} />
        <Route path="/shop/:id" component={Collectionpage} />
      </Switch>
    </div>
  );
};

export default App;
