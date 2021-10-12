import React, { useState } from "react";
import "./authpage.styles.scss";

import { useMediaQuery } from "react-responsive";

import { authService, firebaseInstance } from "../../firebase/firebase";
// import Auth from "@aws-amplify/auth";

const Authpage: React.FC = () => {
  const [signInName, setSignInName] = useState<string>();
  const [signInPassword, setSignInPassword] = useState<string>();
  const [signUpName, setSignUpName] = useState<string>();
  const [signUpPassword, setSignUpPassword] = useState<string>();
  const [registered, setRegistered] = useState<boolean>(true);
  const notDesktop = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 768px)",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "signInName") {
      setSignInName(value);
    } else if (name === "signInPassword") {
      setSignInPassword(value);
    } else if (name === "signUpName") {
      setSignUpName(value);
    } else if (name === "signUpPassword") {
      setSignUpPassword(value);
    }
  };

  const Signup = async (event: any) => {
    event.preventDefault();
    await authService.createUserWithEmailAndPassword(
      signUpName!,
      signUpPassword!
    );
  };

  const Signin = async (event: any) => {
    event.preventDefault();
    await authService.signInWithEmailAndPassword(signInName!, signInPassword!);
  };

  const toggleRegistered = () => {
    setRegistered(!registered);
  };

  return (
    <div className="authpage">
      {notDesktop ? (
        <div className="authpage__notDesktop">
          <form
            className="authpage__notDesktop-form"
            onSubmit={registered ? Signin : Signup}
          >
            <h1 className="authpage__notDesktop-title">
              {registered ? "Sign In" : "Sign Up"}
            </h1>
            <input
              className="authpage__notDesktop-username"
              type="text"
              placeholder="username"
              name={registered ? "signInName" : "signUpName"}
              onChange={onChange}
              required
            />
            <input
              className="authpage__notDesktop-password"
              type="password"
              placeholder="password"
              name={registered ? "signInPassword" : "signUpPassword"}
              onChange={onChange}
              required
            />
            <input
              className="authpage__notDesktop-submit"
              type="submit"
              value={registered ? "Sign In" : "Sign Up"}
            />
          </form>
          <p className="authpage__notDesktop-paragraph">
            {registered ? "not registered yet?" : "already resitered?"}
            <span
              className="authpage__notDesktop-span"
              onClick={toggleRegistered}
            >
              {registered ? " Sign Up" : " Sign In"}
            </span>
          </p>
        </div>
      ) : (
        <>
          <div className="authpage__signin">
            <form className="authpage__signin-form" onSubmit={Signin}>
              <h1 className="authpage__signin-title">Sign In</h1>
              <input
                className="authpage__signin-username"
                type="text"
                placeholder="username"
                name="signInName"
                onChange={onChange}
                required
              />
              <input
                className="authpage__signin-password"
                type="password"
                placeholder="password"
                name="signInPassword"
                onChange={onChange}
                required
              />
              <input
                className="authpage__signin-submit"
                type="submit"
                value="Sign In"
              />
            </form>
          </div>
          <div className="authpage__signup">
            <form className="authpage__signup-form" onSubmit={Signup}>
              <h1 className="authpage__signup-title">Sign Up</h1>
              <input
                className="authpage__signup-username"
                type="text"
                placeholder="username"
                name="signUpName"
                onChange={onChange}
                required
              />
              <input
                className="authpage__signup-password"
                type="password"
                placeholder="password"
                name="signUpPassword"
                onChange={onChange}
                required
              />
              <input
                className="authpage__signup-submit"
                type="submit"
                value="Sign Up"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Authpage;
