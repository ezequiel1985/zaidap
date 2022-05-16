import { useState } from "react"
//import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { getItem } from "../../services/firebase/firestore"

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()
    
    useAsync(
        setLoading,
        ()=> getItem(productId),
        setProduct,
        ()=> console.log("Ups, hubo un error en itemDetailContainer"),
        [productId]
    )
           
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