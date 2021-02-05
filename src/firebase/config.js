import dotenv from 'dotenv'
dotenv.config()
import firebase from 'firebase/app';
import 'firebase/database'


    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: process.env.appKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
    });


export default {
    firebase
}
