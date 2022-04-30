import { useState, useEffect } from "react"
//import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
//Conectamos con nuestra base (colección y documentos) en Firebase 
import { firestoreDb } from '../../services/firebase'
//Conectamos con las funciones de Firebase y entyre {} las requerimos.
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()

    useEffect(() =>{
        // getProductsById(productId).then(item =>{
        //     setProduct(item)
        // }).catch(err =>{
        //     console.log(err)
        // }).finally(()=>{
        //     setLoading(false)
        // })

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
            console.log(product, 'carga product en firebase')
        })
        return (()=>{
            setProduct()
        })

    }, [productId]) 
    // 2do paramentro useEffecte recibe una array.
    // Si está vacio el componente se va a montar siempre. 
    // Si el array está vacio [] se va a renderizar cuando el componente se monte
    // Si estamos requieriendo dentro del array algún elemento se va a renderizar cuando se actualice. Por ejemplo puede estar recibiendo un booleano (true o false)  

       
    return(
        <>
        <div>
         { 
            loading ?
            <h1>Cargando...</h1> :
            product ?
                <ItemDetail {...product}/> :
                <h1> El producto no existe </h1>
         }
        </div>
        </>
    )
}
export default ItemDetailContainer