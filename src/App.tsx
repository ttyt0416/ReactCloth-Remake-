import React, { useState, useEffect } from "react";
import "./App.css";

import { authService } from "./firebase/firebase";
import { Switch, Route, Redirect } from "react-router";

import Homepage from "./pages/homepage/homepage.component";
import Authpage from "./pages/authpage/authpage.component";
import Collectionpage from "./pages/collectionpage/collectionpage.component";

import Header from "./components/header/header.component";

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
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user!.displayName,
      uid: user!.uid,
    });
  };

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

        <Route path="/shop/:id" component={Collectionpage} />
      </Switch>
    </div>
  );
};

export default App;
