import * as firebase from 'firebase'
import firebaseApi from "./firebaseApi";

require('firebase/auth')

export default {
    createUser,
    login,
    checkConnection,
    signOut
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
            const collections = [{name:'users',id:userId},{name:'posts'}]
            return firebaseApi.getData(collections)
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
            res(undefined)
        } else {
            let userId = user.uid
            getData(userId, (user) => {
                res(user)
            })
        }
    })
}

async function getData(userId, res) {
    let collections = [{name:'users',id:userId},{name:'userDetails',id:'t1IRqEWZAKr5aJ468H6a'}]
    let user = await firebaseApi.getData(collections)
    user.uid = userId
    res(user)
}
function signOut() {
    firebase.default.auth().signOut().then(function() {

    }).catch(function(error) {
        // An error happened.
    });
}
