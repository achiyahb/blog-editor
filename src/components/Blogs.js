import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Blog = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Grid>
                hello from blogs
            </Grid>
        </div>
    );
}

export default Blog

