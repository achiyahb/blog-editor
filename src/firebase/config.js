import dotenv from 'dotenv'
import firebase from 'firebase/app';
import 'firebase/database'
dotenv.config()


    // Your web app's Firebase configuration
firebase.initializeApp({
    // apiKey: process.env.appKey,
    // authDomain: process.env.authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
    });


export default {
    firebase
}
