import React, {useState, useContext, useEffect} from 'react';
import UserContext from "../context/UserContext";
import PostsContext from "../context/PostsContext";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Container from "@material-ui/core/Container"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import firebaseApi from "../firebase/firebaseApi";
import ModeButton from "../components/ModeButton"

const useStyles = makeStyles((theme) => ({
        icon: {
            marginLeft: '1rem',
        },
        backBtn:{
            textAlign:'left',
            marginTop:'1rem'
        },
        button: {
            color:'white',
            margin:'1rem',
            marginLeft:0
        },
        buttons:{
            textAlign:'left'
        },
        editorStyle:{
            marginTop:'1rem',
        }
    }
));

const TextEditor = ({changeMode,tEditorMode}) => {
    const postToEdit = useContext(PostsContext).data.postToEdit
    console.log('postToEdit',postToEdit)
    const classes = useStyles();
    const user = useContext(UserContext).data
    const [text, setText] = useState(postToEdit.text?postToEdit.text:"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>.</p>")
    const [title,setTitle] = useState(postToEdit.title?postToEdit.title:'')
    const [key,setKey] = useState('')
    const [description,setDescription] = useState('')
    useEffect(()=>{console.log(postToEdit)},[])

    function inputTitleHandler(e){
        let titleInput = e.target.value
        setTitle(titleInput)
    }
    function inputDescriptionHandler(e){
        let titleDescription = e.target.value
        setDescription(titleDescription)
    }

    function handleSavePost(e){
        const uid = user.uid
        const path = key?`users/${uid}/posts/${key}`:`users/${uid}/posts`
        const author = user.userName
        const postObj ={title, text, author,description}
        if(key){
            firebaseApi.updateData(postObj,path)
        } else{
            firebaseApi.writeData(postObj,path)
                .then(res=>{
                    let postId = res
                    console.log(postId)
                    setKey(postId)
                })
        }
    }


    return (
        <div className="App">
            <Container maxWidth="md">
                <div
                    className={classes.backBtn}
                >
                    <ModeButton changeMode={changeMode} tEditorMode={tEditorMode}/>
                </div>

                <TextField
                    id="outlined-full-width"
                    label="כותרת"
                    placeholder="כותרת"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={postToEdit.title}
                    onChange={inputTitleHandler}
                    type="text"

               />
                <TextField
                    id="outlined-full-width"
                    className={classes.Toolbar}
                    label="תיאור"
                    placeholder="תיאור"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={inputDescriptionHandler}
                    type="text"
                />
                <div                         className={classes.editorStyle}

                >
                    <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                        config={{
                            language: 'he',
                        }}
                    />
                </div>
                <div
                    className={classes.buttons}
                >
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon className={classes.icon}/>}
                        color="primary"
                        onClick={handleSavePost}
                    >
                        שמור
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        style={{background:'#f57d29'}}
                        className={classes.button}
                        startIcon={<CloudUploadIcon className={classes.icon}/>}
                    >
                        פרסם
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default TextEditor

