import React, {useEffect, useState} from 'react';
import Blogs from '../Blogs'
import {makeStyles} from "@material-ui/styles";
import firebaseApi from "../../firebase/firebaseApi";
import AddBlogButton from "../AddBlogButton";

const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Main = ({changeMode}) => {
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [blogs, setBlogs]= useState([])
    //
    //
    // function inputDescriptionHandler(e){
    //     let titleDescription = e.target.value
    //     setDescription(titleDescription)
    // }
    useEffect(()=>{
        const uid = "DFGT4FGD2-"
        const path = `users/${uid}`
        firebaseApi.getData(path)
            .then(res=>{
                console.log(res)
                let blogsObj = res.blogs
                let userName = res.userName
                let dbBlogs = []
                for (const [key, blog] of Object.entries(blogsObj)) {
                    blog.key = key
                    dbBlogs.push(blog)
                }
                console.log(dbBlogs)
                setBlogs(dbBlogs)
                setUserName(userName)
            })
    },[])
    return (
        <div className={classes.main}>
            <h2>
                שלום {userName}
            </h2>
            <h4>לעריכה לחץ על הבלוג המבוקש</h4>
            <div>
                <Blogs/>
            </div>
            <div>
                <AddBlogButton changeMode={changeMode}/>
            </div>
        </div>
    );
}

export default Main

