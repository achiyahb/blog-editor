import * as firebase from 'firebase'
import firebaseApi from "./firebaseApi";
require('firebase/auth')

export default {
    createUser
}

function createUser(user) {
    return firebase.default.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            let userId = res.user.uid
            localStorage.setItem('uid',userId)
            delete user.password
            firebaseApi.updateData(user,`users/${userId}/userDetails`)
            user.uid = userId
            return user
        })
        .catch(error => (this.error = error));
}
