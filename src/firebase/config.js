import dotenv from 'dotenv'
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/firestore'
dotenv.config()


    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyBV208Owp2mO4l4pU2R1Cfy1Zz0dBWwPwA",
    authDomain: "text-editor-prokit.firebaseapp.com",
    databaseURL: "https://text-editor-prokit-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "text-editor-prokit",
    storageBucket: "text-editor-prokit.appspot.com",
    messagingSenderId: "86227175452",
    appId: "1:86227175452:web:36860695f42b9d0fd337d9"
    });


export default {
    firebase
}
