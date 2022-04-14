
import {useState, useEffect} from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) =>{
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

     useEffect(()=>{
        getProducts(categoryId).then(prods =>{
            setProducts(prods)
        }).catch(error =>{
            console.log(error)
        })
    },[categoryId])

    return(
        <>
        <h1>{props.greeting}</h1>
        <ItemList products={products}/>
        </>

    )
}
export default ItemListContainer