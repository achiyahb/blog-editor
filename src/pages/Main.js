import React, {useContext, useState} from 'react';
import UserContext from "../context/UserContext";
import Posts from '../components/Posts'
import {makeStyles} from "@material-ui/styles";
import ModeButton from "../components/ModeButton";
import PostsContext from "../context/PostsContext";

const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Main = ({changeMode}) => {
    const classes = useStyles();
      const posts = useContext(PostsContext).data.posts
    const userName = useContext(UserContext).data.userName


    return (
        <div className={classes.main}>
            <h2>
                שלום {userName}
            </h2>
            <h4>{!posts?"עדיין אין לך פוסטים שמורים":"לעריכה, לחץ על הבלוג המבוקש"}</h4>
            <div>
                <Posts posts={posts}/>
            </div>
            <div>
                <ModeButton changeMode={changeMode} />
            </div>
        </div>
    );
}

export default Main

