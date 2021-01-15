import React from "react";
//import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();

    //Redux toggle

    let signInToggle = () => {
        dispatch({
            type: "toggleSignIn",
        });
    };

    //Firebase func for user signup

    let signupHandler = (e) => {
        e.preventDefault();
        const signupEmail = document.querySelector("#email").value;
        const signupPassword = document.querySelector("#password").value;
        const signupUsername = document.querySelector("#firstName").value;
        if (signupUsername.length <= 12) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(signupEmail, signupPassword)
                .then((cred) => {
                    dispatch({
                        type: 'CURRENT_USER_UID_SEND',
                        currentUserUid: cred.user.uid
                    });
                })
                .then(
                    dispatch({
                        type: 'LOGIN'
                    })
                )
                .catch((Error) => {
                    window.alert("Error: user info previously created");
                });
        } else {
            window.alert("Username must be less than 13 characters long");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up for Tweedur
        </Typography>
                <form className={classes.form} onSubmit={ signupHandler } noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="Username"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Username"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link onClick={signInToggle} href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
