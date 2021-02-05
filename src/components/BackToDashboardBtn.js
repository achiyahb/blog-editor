import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
        button: {
            marginTop: '1rem'
        }
    }
));

const BackToDashboardBtn = ({changeMode}) => {
    const classes = useStyles();
    return (
        <div className={classes.button}>
            <Button
                onClick={()=>{
                    changeMode()
                }}
            >
                חזרה לדף הבית
            </Button>
        </div>
    );
}

export default BackToDashboardBtn

