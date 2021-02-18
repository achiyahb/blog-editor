import firebaseInstance from './config';


const db = firebaseInstance.firebase.firestore();

export default {
    writeData,
    deleteData,
    updateData,
    getData,
}


// the good one
function getData(collections) {
    let ref = getRef(collections)

    return ref.get().then((doc) => {
            if(doc.docs){
                let docsArray = []
                doc.docs.forEach(doc=>{
                    docsArray.push(doc.data())
                })
                console.log(docsArray)
                return docsArray
            }else{
                return  doc.data()
            }

        }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

function updateData(data, collections) {
    let ref = getRef(collections)
    collections.forEach((collection) => {
        ref = ref.collection(collection.name).doc(collection.id)
    })
   return ref.set(data)
        .then(res=>{
            return 'success'
        })
}

async function writeData(data, collections) {
    let ref = getRef(collections)
    let res = await ref.add(data)
    return res['id']
}

function deleteData(path) {
    firebaseInstance.firebase.database().ref(path).set(null);
}

function getRef(collections){
    let ref = db
    collections.forEach((collection) => {
        if (!collection.id) {
            ref = ref.collection(collection.name)
        } else {
            ref = ref.collection(collection.name).doc(collection.id)
        }
    })
    return ref
}

