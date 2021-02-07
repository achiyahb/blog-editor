import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
}));

export default function Register({navigate}) {
    const classes = useStyles();
    const navigateToSignIn = function (){
        navigate()
    }
    const [userName,setUserName]= useState('')
    const [password,setPassword]= useState('')
    const [email,setEmail]= useState('')
    function handleUserNameChanges(e){
        setUserName(e.target.value)
    }
    function handleEmailChanges(e){
        setEmail(e.target.value)
    }
    function handlePasswordChanges(e){
        setPassword(e.target.value)
    }
    async function handleSubmitBtn(){
        let userObj = {
            userName,email,password
        }
        let user =await auth.createUser(userObj)
        console.log(user)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                   הירשם
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="שם"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={handleUserNameChanges}
                    />
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
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmitBtn}
                    >
                        הירשם
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" onClick={navigateToSignIn} variant="body2">
                                {"משתמש רשום? התחבר כאן"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}