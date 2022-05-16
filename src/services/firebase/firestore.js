//Conectamos con nuestra base (colección y documentos) en Firebase
import { firestoreDb } from "./index"
//Conectamos con las funciones de Firebase y entyre {} las requerimos.
import { getDoc, doc, query, where, collection, getDocs } from "firebase/firestore"



export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject)=> {
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')
        
        getDocs(collectionRef).then(response =>{
            
            const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            resolve(products)
            
        }).catch(error =>{
            reject(error)
        })

    })

}

export const getCategoriesNavbar = ()=>{
    return new Promise ((resolve, reject)=>{
        getDocs(collection(firestoreDb, 'categories')).then(response =>{
            const categories = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            resolve(categories)
        }).catch(error =>{
            reject(error)
        })

    })
}

export const getItem = (productId) => {
    return new Promise ((resolve,reject) => {

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            resolve(product)
        })
        .catch(error => {
            reject(error)
        })
    },)
}



