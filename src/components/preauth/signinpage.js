import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector} from 'react-redux';
import firebase from 'firebase';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

//Redux action func for toggling to signup page

export function SignIn() {
    const classes = useStyles();

    const dispatch = useDispatch();

    let signUpToggle = () => {
        dispatch({
            type:'toggleSignUp'
        })
    }

    if (useSelector((state) => state.currentUserUid) != null) {
        dispatch({
            type:'LOGIN'
        })
    }

    //Firebase func for logging in user

    let UserLogin = (e) => {
        const currentUserUid = (state) => state.currentUserUid;
        e.preventDefault();
        const loginEmail = document.querySelector("#email").value;
        const loginPassword = document.querySelector("#password").value;
        firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then((cred) => {
                dispatch({
                    type: "CURRENT_USER_UID_SEND",
                    currentUserUid: cred.user.uid,
                });
            })
            .catch((Error) => {
                window.alert("Error: incorrect username or password");
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <h2>Welcome back to Tweedur.</h2>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={ UserLogin } noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link onClick={ signUpToggle } href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}