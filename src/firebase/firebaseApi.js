import firebaseInstance from './config';


const db = firebaseInstance.firebase.firestore();

export default {
    writeData,
    deleteData,
    updateData,
    getData,
}


// the good one
function getData(path) {
    return firebaseInstance.firebase.database().ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function updateData(data, collections) {
    let ref = db
    collections.forEach((collection) => {
        ref = ref.collection(collection.name).doc(collection.id)
    })
   return ref.set(data)
        .then(res=>{
            return 'success'
        })
}

async function writeData(data, collections) {
    let ref = db
    collections.forEach((collection, key) => {
        if (key === collections.length - 1) {
            ref = ref.collection(collection.name)
        } else {
            ref = ref.collection(collection.name).doc(collection.id)
        }
    })
    let res = await ref.add(data)
    return res['id']
}

function deleteData(path) {
    firebaseInstance.firebase.database().ref(path).set(null);
}



