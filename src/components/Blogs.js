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

const Blogs = ({blogs}) => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container direction={'row'}>
                {
                    blogs.map((blog, i) => {
                        return (
                            <Grid>
                                <Blog blog={blog} key={i}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Blogs

