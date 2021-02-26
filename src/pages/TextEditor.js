import React, {useState, useContext, useEffect} from 'react';
import UserContext from "../context/UserContext";
import PostsContext from "../context/PostsContext";
import CKEditor from 'ckeditor4-react';

import Container from "@material-ui/core/Container"
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import firebaseApi from "../firebase/firebaseApi";
import ModeButton from "../components/ModeButton"
import CustomTextField from "../components/CustomTextField";
import EditIcon from '@material-ui/icons/Edit';

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
    const changePostToEdit = useContext(PostsContext).changePostToEdit
    const classes = useStyles();
    const user = useContext(UserContext).data
    const [text, setText] = useState(postToEdit.text?postToEdit.text:"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>.</p>")
    const [title,setTitle] = useState('')
    const [postId,setPostId] = useState('')
    const [description,setDescription] = useState('')
    const [canSave,setCanSave] = useState(true)

    useEffect(()=>{
        if(postToEdit.title) setTitle(postToEdit.title)
        if(postToEdit.description) setDescription(postToEdit.description)
        if(postToEdit.postId) setPostId(postToEdit.postId)
    },[])

    function handleEditText(evt){
        setText(evt.editor.getData())
        console.log(text)
    }

    function inputTitleHandler(e){
        let titleInput = e.target.value
        setTitle(titleInput)
    }
    function inputDescriptionHandler(e){
        let titleDescription = e.target.value
        setDescription(titleDescription)
    }

    function handleSavePost(){
        setCanSave(false)
        const collections= [{name:'users',id:user.uid},{name:'posts',id:postId}]
        const author = user.userName
        const postObj ={title, text, author,description}
        if(postId){
            firebaseApi.updateData(postObj,collections)
                .then(res=>{
                    setCanSave(true)
                })
        } else{
            firebaseApi.writeData(postObj,collections)
                .then(res=>{
                    let postId = res
                    setPostId(postId)
                    setCanSave(true)
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

                <CustomTextField
                    value={title}
                    onChange={inputTitleHandler}
                    placeholder={'כותרת'}
                    label={'כותרת'}
                />
                <CustomTextField
                    value={description}
                    onChange={inputDescriptionHandler}
                    placeholder={'תיאור'}
                    label={'תיאור'}
                    className={classes.Toolbar}
                />
                <div                         className={classes.editorStyle}

                >
                    <CKEditor

                        data={text}
                        onChange={handleEditText}

                    />
                </div>
                <div
                    className={classes.buttons}
                >
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.button}
                        startIcon={postId?<EditIcon className={classes.icon}/>:<SaveIcon  className={classes.icon}/>}
                        color={postId?"secondary":"primary"}
                        onClick={handleSavePost}
                        disabled={!canSave}
                    >
                        {postId?"ערוך":"שמור"}
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

