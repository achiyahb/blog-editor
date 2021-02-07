import React, {useState,useEffect, useContext} from 'react';
import UserContext from "../context/UserContext";
import {PostsProvider} from "../context/PostsContext";
import firebaseApi from "../firebase/firebaseApi";
import Main from "./Main";
import TextEditor from "./TextEditor";


const Container = () => {
    let [tEditorMode,setTEditorMode] = useState(false)
    const [posts, setPosts]= useState([])
    const [postToEdit, setPostToEdit] = useState({})
    const user = useContext(UserContext).data

    const providerOptions = {
        data: {posts,postToEdit},
        changePosts: (value) => setPosts(value),
        changePostToEdit: (value) => setPostToEdit(value)
    }
    const changeMode = ()=>{
        setTEditorMode(!tEditorMode)
    }
    useEffect(()=>{
        getPostsData()
    },[])

    useEffect(()=>{
        if(postToEdit.text)
        setTEditorMode(true)
    },[postToEdit])

    useEffect(()=>{
        if(!tEditorMode)
        setPostToEdit({})
    },[tEditorMode])

    function getPostsData(){
        const uid = user.uid
        const path = `users/${uid}/posts`
        firebaseApi.getData(path)
            .then(res=>{
                if(res){
                    console.log(res)
                    let postsObj = res
                    let dbPosts = []
                    let index = 0
                    for (const [key, post] of Object.entries(postsObj)) {
                        post.key = key
                        post.index = index
                        dbPosts.push(post)
                        index++
                    }
                    console.log(dbPosts)
                    setPosts(dbPosts)
                }
            })
    }

    return (
        <div className="container">
            <PostsProvider value={providerOptions}>
                {
                    !tEditorMode?
                        <Main changeMode={changeMode}/>:
                        <TextEditor changeMode={changeMode} tEditorMode={tEditorMode}/>
                }
            </PostsProvider>
        </div>
    );
}

export default Container

