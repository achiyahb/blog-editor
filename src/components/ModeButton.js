import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
        backBtn: {
            marginTop: 0
        },
        icon:{
            marginRight: "1rem"
        },
        blogBtn:{
            textAlign:"left",
            margin:'2rem',
            bottom:'1rem',
            position:'absolute',
            left:'1rem'
        }
    }
));

const ModeButton = ({changeMode,tEditorMode}) => {
    const classes = useStyles();

    return (
        <div className={tEditorMode?classes.backBtn:classes.blogBtn}>
            <Button
                variant="contained"
                size="large"
                style={{background: 'indigo',color:'white'}}
                className={classes.button}
                endIcon={tEditorMode?<KeyboardBackspaceIcon className={classes.icon}/>
                :<AddCircleIcon className={classes.icon}/>}
                onClick={() => {
                    changeMode()
                }}
            >
                {tEditorMode?'חזרה לדף הראשי':'בלוג חדש'}
            </Button>
        </div>
    );
}

export default ModeButton

