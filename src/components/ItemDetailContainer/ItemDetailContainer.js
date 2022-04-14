import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() =>{
        getProductsById(productId).then(item =>{
            setProduct(item)
        }).catch(err =>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })

        return (()=>{
            setProduct()
        })

    }, [productId]) // 2do paramentro del useEffecte puede ser null, vacio [] o [productId] ¿que hace cada uno? 

    console.log(product)
    
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