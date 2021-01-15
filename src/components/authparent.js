import React from "react";
import { useSelector } from "react-redux";
import { SignIn } from "./preauth/signinpage";
import { SignUp } from "./preauth/signuppage";

export function AuthParent() {
    const userAuthStatus = useSelector((state) => state.userLoginStatus);
    const signPageToggle = useSelector((state) => state.signPageToggle);

    let signUpToggle = () => { }

    if (userAuthStatus === "loggedOut" && signPageToggle === "SignIn") {
        return <SignIn />;
    } else if (userAuthStatus === "loggedOut" && signPageToggle === "SignUp") {
        return <SignUp />;
    } else if (userAuthStatus === "loggedIn") {
        return null;
    }
}
