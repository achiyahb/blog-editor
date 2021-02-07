import React, {useContext, useState} from 'react';
import UserContext from "../context/UserContext";
import Posts from '../components/Posts'
import {makeStyles} from "@material-ui/styles";
import ModeButton from "../components/ModeButton";
import PostsContext from "../context/PostsContext";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: '5rem'
        }
    }
));

const Main = ({changeMode}) => {
    const classes = useStyles();
      const posts = useContext(PostsContext).data.posts
    const userName = useContext(UserContext).data.userName


    return (
        <div className={classes.main}>
            <h1>
                שלום {userName}
            </h1>
            <h3>{!posts?"עדיין אין לך פוסטים שמורים":"לעריכה, לחץ על הבלוג המבוקש"}</h3>
            <div>
                <Container className={classes.main}>
                    <Posts posts={posts}/>
                </Container>
            </div>
            <div>
                <ModeButton changeMode={changeMode} />
            </div>
        </div>
    );
}

export default Main

