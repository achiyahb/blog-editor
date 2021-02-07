import dotenv from 'dotenv'
import firebase from 'firebase/app';
import 'firebase/database'
dotenv.config()


    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: 'AIzaSyBV208Owp2mO4l4pU2R1Cfy1Zz0dBWwPwA',
    authDomain: 'text-editor-prokit.firebaseapp.com',
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
    });


export default {
    firebase
}
