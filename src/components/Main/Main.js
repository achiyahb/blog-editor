import React, {useState} from 'react';
import Blogs from '../Blogs'
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
        main: {
            marginTop: 0
        }
    }
));

const Main = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('אחיה חביב')
    //
    //
    // function inputDescriptionHandler(e){
    //     let titleDescription = e.target.value
    //     setDescription(titleDescription)
    // }

    return (
        <div className={classes.main}>
            <h2>
                שלום {userName}
            </h2>
            <h4>לעריכה לחץ על הבלוג המבוקש</h4>
            <div>
                <Blogs/>
            </div>
        </div>
    );
}

export default Main

