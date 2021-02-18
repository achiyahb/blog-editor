import React, {useState,useEffect} from 'react';
import './App.css';
import Container from "./pages/Container";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Register from "./pages/Register";
import {Grid} from "@material-ui/core";
import { UserProvider } from "./context/UserContext";
import auth from "./firebase/auth";
import Spiner from "./components/Spiner";



function App() {
    let [userSignIn,setUserSignIn] = useState(false)
    let [needRegister,setNeedRegister] = useState(false)
    const [loadData, setLoadData] = useState(true)
    const [user,setUser] = useState({})


    useEffect(()=>{
        checkConnection()
    },[])

    const checkConnection= ()=>{
    auth.checkConnection((res)=>{
        setLoadData(true)
        if(res){
            setUser(res)
        }else{

        }
    })
    }

    const providerOptions = {
        data: user,
        changeUser: (value) => setUser(value)
    }

    const navigate = ()=>{
        setNeedRegister(!needRegister)
    }
    function handleSignInMode(){
        setUserSignIn(!userSignIn)
    }
    return (
        <div className="App"
             dir="rtl"
        >
            <UserProvider value={providerOptions}>
                <Grid
                    container direction="column"
                >
                    <Grid item>
                        <Header/>
                    </Grid>
                    <Grid item>
                        {
                            loadData?(!user.email?
                                (!needRegister ?
                                    <SignIn navigate={navigate} handleSignInMode={handleSignInMode} /> :
                                    <Register navigate={navigate} handleSignInMode={handleSignInMode}/>):
                                <Container/>):
                                <div
                                    className="spinner"
                                >
                                    <Spiner/>
                                </div>
                        }
                    </Grid>
                </Grid>
            </UserProvider>
        </div>
    );
}

export default App;
