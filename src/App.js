import React, {useState} from 'react';
import './App.css';
import TextEditor from "./components/TextEditor/TextEditor";
import Header from "./components/header/Header";
import Main from "./components/Main/Main"
import {Grid} from "@material-ui/core";


function App() {
    let [tEditorMode,setTEditorMode] = useState(false)

    const changeMode = ()=>{
        setTEditorMode(!tEditorMode)
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
                    {!tEditorMode?
                        <Main changeMode={changeMode}/>:
                        <TextEditor changeMode={changeMode}/>}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
