import firebaseInstance from './config';
import 'firebase/firestore'

const db = firebaseInstance.firestore();

export default {
    writeData,
    deleteData,
    updateData,
    getData,
}


function getData(collections) {
    const ref = getRef(collections)

    return ref.get().then((doc) => {
            if(doc.docs){
                const docsArray = []
                doc.docs.forEach((doc,key)=>{
                    const obj = doc.data()
                    obj.id = doc.id
                    docsArray.push(obj)
                })
                return docsArray
            }else{
                return  doc.data()
            }

        }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

function updateData(data, collections) {
    const ref = getRef(collections)
       return ref.set(data)
        .then(res=>{
            return 'success'
        })
}

async function writeData(data, collections) {
    const ref = getRef(collections)
    const res = await ref.add(data)
    return res['id']
}

function deleteData(collections) {
    const ref = getRef(collections)
    return ref.delete()
        .then(res=>{
            console.log("Document successfully deleted!");
            return 'success'
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
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

