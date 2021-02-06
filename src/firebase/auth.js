import firebaseInstance from "../firebase/config"
import firebaseApi from "./firebaseApi";

export default {
    createUser
}

function createUser(user) {

    firebaseInstance.firebase.auth()
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
