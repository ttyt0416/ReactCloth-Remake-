import React, { useState, useEffect } from "react";
import "./authpage.styles.scss";

import { authService, firebaseInstance } from "../../firebase/firebase";
import Auth from "@aws-amplify/auth";

const Authpage: React.FC = () => {
  const [signInName, setSignInName] = useState<string>();
  const [signInPassword, setSignInPassword] = useState<string>();
  const [signUpName, setSignUpName] = useState<string>();
  const [signUpPassword, setSignUpPassword] = useState<string>();

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
    // await authService.createUserWithEmailAndPassword(
    //   signUpName!,
    //   signUpPassword!
    // );
    try {
      const user = await Auth.signUp({
        username: signUpName!,
        password: signUpPassword!,
      });
      // const { confirmUser } = await Auth.confirmSignUp(signUpName!,);
      console.log(user);
    } catch (error) {
      console.log("error signing up:", { error });
    }
  };

  const Signin = async (event: any) => {
    event.preventDefault();
    // await authService.signInWithEmailAndPassword(signInName!, signInPassword!);
    try {
      const user = await Auth.signIn(signInName!, signInPassword!);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <div className="authpage">
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
    </div>
  );
};

export default Authpage;
