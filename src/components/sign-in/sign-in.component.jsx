import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserInfo({ email: "", password: "" });
    } catch (error) {
      console.log("Error signing in: ", error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
