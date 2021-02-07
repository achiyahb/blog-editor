import * as firebase from 'firebase'
import firebaseApi from "./firebaseApi";

require('firebase/auth')

export default {
    createUser,
    login,
    checkConnection
}

function createUser(user) {
    return firebase.default.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            let userId = res.user.uid
            localStorage.setItem('uid', userId)
            delete user.password
            firebaseApi.updateData(user, `users/${userId}/userDetails`)
            user.uid = userId
            return user
        })
        .catch(error => (this.error = error));
}

function login(user) {
    return firebase
        .default
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            let userId = data.user.uid
            return firebaseApi.getData(`users/${userId}/userDetails`)
                .then(res => {
                    let user = res
                    user.uid = userId
                    return user
                })
        })
        .catch(error => {
            this.error = error;
        });
}

function checkConnection(res) {
    firebase.default.auth().onAuthStateChanged(function (user) {
        if (!user) {
            return undefined
        } else {
            let userId = user.uid
            getData(userId, (user) => {
                res(user)
            })
        }
    })
}

async function getData(userId, res) {
    let user = await firebaseApi.getData(`users/${userId}/userDetails`)
    user.uid = userId
    res(user)
}
