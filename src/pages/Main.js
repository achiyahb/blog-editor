import React, {useState,useEffect, useContext} from 'react';
import UserContext from "../context/UserContext";
import Posts from '../components/Posts'
import {makeStyles} from "@material-ui/styles";
import firebaseApi from "../firebase/firebaseApi";
import ModeButton from "../components/ModeButton";

const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Main = ({changeMode}) => {
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [posts, setPosts]= useState([])
    const user = useContext(UserContext).data
    //
    //
    // function inputDescriptionHandler(e){
    //     let titleDescription = e.target.value
    //     setDescription(titleDescription)
    // }
    useEffect(()=>{
        const uid = user.uid
        setUserName(user.userName)
        const path = `users/${uid}/posts`
        firebaseApi.getData(path)
            .then(res=>{
                if(res){
                    console.log(res)
                    let postsObj = res
                    let dbPosts = []
                    for (const [key, post] of Object.entries(postsObj)) {
                        post.key = key
                        dbPosts.push(post)
                    }
                    console.log(dbPosts)
                    setPosts(dbPosts)
                }


            })
    },[])
    return (
        <div className={classes.main}>
            <h2>
                שלום {userName}
            </h2>
            <h4>{posts?"עדיין אין לך פוסטים שמורים":"לעריכה, לחץ על הבלוג המבוקש"}</h4>
            <div>
                <Posts posts={posts}/>
            </div>
            <div>
                <ModeButton changeMode={changeMode}/>
            </div>
        </div>
    );
}

export default Main

