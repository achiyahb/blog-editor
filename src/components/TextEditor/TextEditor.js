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
        }
    }
));

const TextEditor = () => {
    const classes = useStyles();
    const [text, setText] = useState('')
    const [title,setTitle] = useState('')

    function inputTitleHandler(e){
        let titleInput = e.target.value
        setTitle(titleInput)
    }

    function handleSaveBlog(e){
        const uid = "DFGT4FGD2-"
        const path = `users/${uid}`
        const author = 'Achiya Haviv'
        const blogObj ={
            title,
            text,
            author
        }
        firebaseApi.updateData(blogObj,path)
    }

    useEffect(()=>{
        console.log('mounted')
    },[])
    return (
        <div className="App">
            <Container maxWidth="md">
                <TextField
                    id="outlined-full-width"
                    className={classes.Toolbar}
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
                <div className="editor"
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
