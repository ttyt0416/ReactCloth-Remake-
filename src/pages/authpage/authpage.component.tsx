import React, { useState, useEffect } from "react";
import "./authpage.styles.scss";

import { Auth } from "aws-amplify";
import { SignUpParams } from "@aws-amplify/auth";

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
    await Auth.signUp({ username: signInName!, password: signInPassword! });
  };

  const Signin = async (event: any) => {
    event.preventDefault();
    await Auth.signIn(signInName!, signInPassword!);
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
      <div className="signup">
        <form className="signup-form" onSubmit={Signup}>
          <h1 className="signup-title">Sign Up</h1>
          <input
            className="signup-username"
            type="text"
            placeholder="username"
            name="signUpName"
            onChange={onChange}
            required
          />
          <input
            className="signup-password"
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
