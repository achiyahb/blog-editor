import React, {useState} from 'react';
import './App.css';
import TextEditor from "./pages/TextEditor";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Main from "./pages/Main"
import Register from "./pages/Register";
import {Grid} from "@material-ui/core";


function App() {
    let [tEditorMode,setTEditorMode] = useState(false)
    let [userSignIn,setUserSignIn] = useState(false)
    let [needRegister,setNeedRegister] = useState(false)

    const changeMode = ()=>{
        setTEditorMode(!tEditorMode)
    }
    const navigate = ()=>{
        setNeedRegister(!needRegister)
    }
    return (
        <div className="App"
             dir="rtl"
        >
            <Grid
                container direction="column"
            >
                <Grid item>
                    <Header/>
                </Grid>
                <Grid item>
                    {!userSignIn?
                        (needRegister ?
                            <SignIn navigate={navigate} /> :
                            <Register navigate={navigate}/>):
                        !tEditorMode?
                        <Main changeMode={changeMode}/>:
                        <TextEditor changeMode={changeMode} tEditorMode={tEditorMode}/>
                    }

                </Grid>
            </Grid>
        </div>
    );
}

export default App;
