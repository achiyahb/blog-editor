import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Card} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Blogs = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Card>
                hello world
            </Card>
        </div>
    );
}

export default Blogs

