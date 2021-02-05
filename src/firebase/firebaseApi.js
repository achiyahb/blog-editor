import firebaseInstance from './config';


const db = firebaseInstance.firebase.database();

export default {
    writeData,
    deleteData,
    updateData,
    getData,
}


// the good one
function getData(path) {
    return db.ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function updateData(data, path) {
    db.ref(path).set(data);
}

async function writeData(data, path) {
    let res = await db.ref(path).push(data)
     return res['key']
}

function deleteData(path) {
    db.ref(path).set(null);
}



