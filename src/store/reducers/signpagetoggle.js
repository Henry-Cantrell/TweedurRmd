export const signPageToggle = (state = "SignIn", action) => {
    switch (action.type) {
        case "toggleSignIn":
            return (state = "SignIn");
        case "toggleSignUp":
            return (state = "SignUp");
        default:
            return state
    }
};
