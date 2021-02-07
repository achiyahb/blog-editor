import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Post from "./Post";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Posts = ({posts,editSpecificBlog}) => {
    const classes = useStyles();
       return (
        <div className={classes.main}>
            <Grid container direction={'row'}>
                {
                    posts.map((post, i) => {
                        return (
                            <Grid>
                                <Post post={post} key={i}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Posts

