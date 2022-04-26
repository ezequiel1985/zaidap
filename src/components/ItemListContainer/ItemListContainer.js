
import {useState, useEffect} from 'react'
// import { getProducts } from "../../asyncMock"

import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Slider from '../Slider/Slider'
import Spinner from '../spinner/Spinner'
//Conectamos con nuestra base (colección y documentos) en Firebase 
import { firestoreDb } from '../../services/firebase'
//Conectamos con las funciones de Firebase y entyre {} las requerimos.
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore'


const ItemListContainer = (props) =>{
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

     useEffect(()=>{
        // getProducts(categoryId).then(prods =>{
        //     setProducts(prods)
        // }).catch(error =>{
        //     console.log(error)
        // })

        //Con getDocs traigo varios documentos, donde con collection me conecto a la coleccion products de la base firestoreDb y me traigo la info con .then
        
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')
        
        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
            console.log(products)
        })

    },[categoryId])
    // 2do paramentro useEffecte recibe una array.
    // Si está vacio el componente se va a montar siempre. 
    // Si el array está vacio [] se va a renderizar cuando el componente se monte
    // Si estamos requieriendo dentro del array algún elemento se va a renderizar cuando se actualice. Por ejemplo puede estar recibiendo un booleano (true o false)  
    

    return(
        <>
        
        <ItemList products={products}/>
        <Slider></Slider>
        <Spinner/>
        
        </>

    )
}
export default ItemListContainer