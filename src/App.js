import React from 'react';
import './App.css';
import TextEditor from "./components/TextEditor/TextEditor";
import Header from "./components/header/Header";
import {Grid} from "@material-ui/core";


function App() {
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
                    <TextEditor/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
