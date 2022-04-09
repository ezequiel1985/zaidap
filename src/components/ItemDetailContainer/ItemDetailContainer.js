import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ()=> {
 const [products, setProducts] = useState()

 useEffect(()=>{
     getItem().then(prods =>{
         setProducts(prods)
     }).catch(error =>{
         console.log(error)
     })
 },[])

    return(
        <>
        <div>
        <ItemDetail {...products}/>
        </div>
        </>
    )
}
export default ItemDetailContainer