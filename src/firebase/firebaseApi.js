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
                doc.docs.forEach((doc,key)=>{
                    let obj = doc.data()
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
    let ref = getRef(collections)
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

function deleteData(collections) {
    let ref = getRef(collections)
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

