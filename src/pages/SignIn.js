import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState, useContext} from 'react';
import UserContext from "../context/UserContext";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import auth from "../firebase/auth";


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
    register:{
        cursor:'pointer'
    }
}));

export default function SignIn({navigate, handleSignInMode}) {
    const classes = useStyles();
    const navigateToRegister = function (){
        navigate()
    }
    const changeUser = useContext(UserContext).changeUser
    const [password,setPassword]= useState('')
    const [email,setEmail]= useState('')
    const [btnDisabled,setBtnDisabled]= useState(false)
    function handleEmailChanges(e){
        setEmail(e.target.value)
    }
    function handlePasswordChanges(e){
        setPassword(e.target.value)
    }
    async function handleSubmitBtn(){
        setBtnDisabled(true)
        let userObj = {
            email,password
        }
        let user =await auth.login(userObj)
        console.log(user)
        handleSignInMode()
        changeUser(user)
        // setBtnDisabled(false)
    }



    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    התחבר
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="הכנס מייל"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleEmailChanges}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="סיסמא"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePasswordChanges}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="זכור אותי"
                    />
                    <Button
                        fullWidth
                        disabled={btnDisabled}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmitBtn}
                    >
                        התחבר
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register" onClick={navigateToRegister}
                                  className={classes.register}
                                  variant="body2">
                                {"אין לך משתמש? הרשם עכשיו"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
}
