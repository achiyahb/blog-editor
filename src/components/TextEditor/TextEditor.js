import React, {useEffect, useState} from 'react';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Container from "@material-ui/core/Container"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import firebaseApi from "../../firebase/firebaseApi";
import BackToDashboardBtn from "../BackToDashboardBtn"

const useStyles = makeStyles((theme) => ({
        icon: {
            marginLeft: '1rem',
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

const TextEditor = ({changeMode}) => {
    const classes = useStyles();
    const [text, setText] = useState("<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>.</p>")
    const [title,setTitle] = useState('')
    const [key,setKey] = useState('')
    const [description,setDescription] = useState('')

    function inputTitleHandler(e){
        let titleInput = e.target.value
        setTitle(titleInput)
    }
    function inputDescriptionHandler(e){
        let titleDescription = e.target.value
        setDescription(titleDescription)
    }

    function handleSaveBlog(e){
        const uid = "DFGT4FGD2-"
        const path = key?`users/${uid}/blogs/${key}`:`users/${uid}/blogs`
        const author = 'Achiya Haviv'
        const blogObj ={title, text, author,description}
        if(key){
            firebaseApi.updateData(blogObj,path)
        } else{
            firebaseApi.writeData(blogObj,path)
                .then(res=>{
                    let blogId = res
                    console.log(blogId)
                    setKey(blogId)
                })
        }
    }


    return (
        <div className="App">
            <Container maxWidth="md">
                <BackToDashboardBtn changeMode={changeMode}/>
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
                        onClick={handleSaveBlog}
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

