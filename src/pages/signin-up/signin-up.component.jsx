import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./signin-up.styles.scss";

const SignInUp = () => (
    <div className="signinup">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInUp;
