import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Blog from "./Blog";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Blogs = () => {
    const classes = useStyles();
    const blogs =[1,2,3,4,5,6,7]
    return (
        <div className={classes.main}>
            <Grid container direction={'row'}>
                {
                    blogs.map((user, i) => {
                        return (
                            <Grid>
                                <Blog number={user}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Blogs

