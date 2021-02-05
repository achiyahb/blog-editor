import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
        button: {
            marginTop: 0
        }
    }
));

const AddBlogButton = ({changeMode}) => {
    const classes = useStyles();

    function openTextEditor(){

    }

    return (
        <div className={classes.button}>
            <Button
            onClick={()=>{
                changeMode()
            }}
            >
                בלוג חדש
            </Button>
        </div>
    );
}

export default AddBlogButton

