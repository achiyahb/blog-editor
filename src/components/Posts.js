import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Post from "./Post";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        },
        root:{
            flex:1
        }
    }
));

const Posts = ({posts,editSpecificBlog}) => {
    const classes = useStyles();
       return (
        <div className={classes.main}>
            <Grid container direction={'row'} className={classes.root} spacing={2}>
                {
                    posts.map((post, i) => {
                        return (
                            <Grid md={4}>
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

