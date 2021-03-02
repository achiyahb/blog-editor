import React, {useState,useEffect, useContext} from 'react';
import UserContext from "../context/UserContext";
import {PostsProvider} from "../context/PostsContext";
import firebaseApi from "../firebase/firebaseApi";
import Main from "./Main";
import TextEditor from "./TextEditor";


const Container = () => {
    const [tEditorMode,setTEditorMode] = useState(false)
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
        const collections = [{name:'posts'}]
        firebaseApi.getData(collections)
            .then(res=>{
                if(res){
                    const postsObj = res
                    const dbPosts = []
                    let index = 0
                    for (const [key, post] of Object.entries(postsObj)) {
                        post.key = key
                        post.index = index
                        dbPosts.push(post)
                        index++
                    }
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

